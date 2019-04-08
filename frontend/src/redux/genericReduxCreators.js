import {put,call, takeEvery} from "redux-saga/effects"; 

/**
 * *A note on terminology
 * 
 * In this framework, I am using the term **redux** to refer to a collection of things relating to the use of redux. 
 * 
 * Namely: 
 * 
 *  - A bundle of actions (REQUEST, SUCCESS, FAILURE, RESET)
 *  - An action creator function
 *  - A saga and saga watcher
 *  - A reducer
 *  - A selector 
 * 
 * I will possibly change the term later. 
 */

/**
 * This is the main thing. 
 * 
 * This will create: 
 * 
 * - actions: An object containing the REQUEST / SUCCESS / FAILURE / RESET actions
 * - actionFn: A function to create the action with a payload. 
 * - saga: The saga the runs on the REQUESTs
 * - sagaWatcher: The saga to intercept the REQUESTs and tell the saga to run
 * - reducer: The reducer that runs on SUCCESS and RESET
 * - reducerName: the top level name that this redux will be referred to in the store. 
 * - dataSelector A function to select all the data in this particular redux
 * @param {*} baseName 
 * @param {*} options 
 */
export function createGenericRedux(baseName, options) {

    /**
     * Actions bundle
     */
    const actions = {
        BASE_NAME: baseName, 
        REQUEST: `${baseName}_REQUEST`, 
        SUCCESS: `${baseName}_SUCCESS`, 
        FAILURE: `${baseName}_FAILURE`, 
        RESET: `${baseName}_RESET`, 
    }

    /**
     * Action creator
     * default: first argument is payload
     */
    const actionFn = options.actionFn || function(payload) {
       return {
        type: actions.REQUEST, 
        payload, 
       } 
    }; 

    
    /**
     * Saga - Runs when the sagaWatcher tells it to. 
     * choose sagaFn first, then saga, then default saga (dispatch success immediately). 
     */
    const saga = (options.sagaFn && options.sagaFn()) || options.saga || function* (action) {
        yield put({
            type: actions.SUCCESS, 
            payload: action.payload
        }); 
    } ; 

    /**
     * Saga Watcher- 
     * default: takeEvery(actions.REQUEST)
     */
    const sagaWatcher = options.sagaWatcher ||  function * () {
        yield takeEvery(actions.REQUEST, saga); 
    } ;


    /**
     * Inital State - 
     * default: {}
     */
    const initialState = options.initialState || {}; 

    /**
     * reducer -
     * default: payload is assigned to state (clobbers)
     */
    const reducer = options.reducer || function (state = initialState, action) {

        if (action.type === actions.SUCCESS) {
            return action.payload; 
        }
        if (action.type === actions.RESET) {
            return initialState; 
        }
    }

    const reducerName = options.reducerName || baseName; 

    /**
     * Data selector -
     * default: select entire state
     */
    const dataSelector = options.dataSelector || function(state) {
        return state[reducerName]; 
    }

    return {
        actions, 
        actionFn, 
        saga, 
        sagaWatcher, 
        reducer,
        reducerName,  
        dataSelector, 
    }
}

/**
 * Generic API saga, if you already have the actions
 * @param {*} actions 
 * @param {*} apiCall 
 */
export function createGenericApiSaga(actions, apiCall) {
    return function* (action) {
        try {
            const result = yield call(apiCall, action.payload);
            yield put({
                type: actions.SUCCESS,
                payload: result
            })
        }
        catch (err) {    
            console.error(err);
            yield put({
                type: actions.FAILURE,
                payload: err
            });
        }
    }
}

/**
 * Generic API saga, for passing into the createGenericReduxThings function
 * @param {*} apiCall 
 */
export function genericApiSagaCreatorFn(apiCall) {
    return function (actions) {
        return createGenericApiSaga(actions, apiCall); 
    }
}

/**
 * For the given list of reduxes, create return the reducerName: reducer object
 * @param {*} reduxes 
 */
export function createReducers(reduxes) {
    return reduxes.reduce((acc, cur) => {
        return {...acc, [cur.reducerName] : cur.reducer}
    }, {}); 
}

/**
 * The loading flag reducer
 * Only needs to be called once
 * 
 * For the given list of reduxes, it will instantiate them with false. 
 * @param {*} reduxes 
 */
export function createLoadingFlagReducer(reduxes) {

    const initialState = reduxes.reduce((acc, cur) => {
        return {...acc, [cur.actions.BASE_NAME]: false}
    }, {}); 

    return function (state = initialState, action) {

        const {type}  = action; 
        const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);
        if (!matches) return state;  

        const [, requestName, requestState] = matches;
        return {...state, 
            [requestName]: requestState === 'REQUEST',
        }

    }
};

/**
 * The error reducer
 * Only needs to be called once
 * 
 * For the given list of reduxes, it will instantiate them to null
 * @param {*} reduxes 
 */
export function createErrorReducer(reduxes) {
    const initialState = reduxes.reduce((acc, cur) => {
        return {...acc, [cur.actions.BASE_NAME]: null}
    }, {}); 

    return function (state = initialState, action) {

        const {type, payload}  = action; 
        const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);
        if (!matches) return state;  

        const [, requestName, requestState] = matches;
        return {...state, 
            [requestName]: requestState === 'FAILURE'? payload: null,
        }; 

    }
}