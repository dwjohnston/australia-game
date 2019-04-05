import { combineReducers } from "redux";
import { FETCH_ALL_STUDENTS_SUCCESS, UPDATE_STUDENT_REQUEST, UPDATE_STUDENT_FAILURE, UPDATE_STUDENT_SUCCESS, DELETE_STUDENT_SUCCESS, CLEAR_ERRORS_REQUEST, CLEAR_ERRORS_SUCCESS, FETCH_CURRENCY_RATE_SUCCESS } from "./actions";


const initialState = {};
export function studentsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_STUDENTS_SUCCESS: {
            //Index students by student id. 
            return payload.reduce((acc, cur) => {
                return { ...acc, [cur.id]: cur };
            }, {});
        }

        case UPDATE_STUDENT_SUCCESS: {
            //Add/replace student to existing student index
            return { ...state, [payload.id]: payload }
        }

        case DELETE_STUDENT_SUCCESS: {
            const newState = { ...state };
            delete newState[payload.id];
            return newState;
        }


        default: return state;
    }
}

const initialLoadingState = {
    updateStudent: false,
}
/**
 * This is obviously not a sustainable way to handle loading flags, but works for a quick demo. 
 * 
 * Better solution is a modified version of this: 
 * https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
 */
export function loadingFlagsReducer(state = initialLoadingState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_STUDENT_REQUEST: return { ...state, updateStudent: true }
        case UPDATE_STUDENT_SUCCESS: return { ...state, updateStudent: false }
        case UPDATE_STUDENT_FAILURE: return { ...state, updateStudent: false }
        default: return state;

    }
}

const initialErrorState = {
    errors: null,
}

export function errorsReducer(state = initialErrorState, action) {
    const { type, payload } = action;

    if (type.split('_').pop() === 'FAILURE') {
        return {
            errors: payload
        }
    }

    if (type === CLEAR_ERRORS_SUCCESS) {
        return initialErrorState;
    }

    return state;
}

const rootReducer = combineReducers({
    students: studentsReducer,
    loadingFlags: loadingFlagsReducer,
    errors: errorsReducer,
});


export default rootReducer; 