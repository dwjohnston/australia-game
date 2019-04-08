import {put, takeEvery} from "redux-saga/effects"; 

export function createGenericReduxActions(baseName, options) {

    const actions = {
        BASE_NAME: baseName, 
        REQUEST: `${baseName}_REQUEST`, 
        SUCCESS: `${baseName}_SUCCESS`, 
        FAILURE: `${baseName}_FAILURE`, 
        RESET: `${baseName}_RESET`, 
    }

    const actionFn = options.actionFn || function(payload) {
       return {
        type: actions.REQUEST, 
        payload, 
       } 
    }; 

    const saga = options.saga || function* (action) {
        yield put({
            type: actions.SUCCESS, 
            payload: action.payload
        }); 
    } ; 

    const sagaWatcher = options.sagaWatcher ||  function * () {
        yield takeEvery(actions.REQUEST, saga); 
    } ;


    const initialState = options.initialState || {}; 

    const reducer = options.reducer || function (state = initialState, action) {

        if (action.type === actions.SUCCESS) {
            return action.payload; 
        }
        if (action.type === actions.RESET) {
            return initialState; 
        }
    }

    const reducerName = options.reducerName || baseName; 

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