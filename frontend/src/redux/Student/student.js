import {createGenericRedux, genericApiSagaCreatorFn} from "../genericReduxCreators"; 
import { fetchAllStudents, patchStudent, postStudent, deleteStudent } from "../../services/StudentService";
import { all, takeLeading, put, call } from "redux-saga/effects";


export const reducerName = "students"; 
export const fetchAllStudentsRedux = createGenericRedux("FETCH_ALL_STUDENTS", {
    sagaFn: genericApiSagaCreatorFn(fetchAllStudents), 
    reducerName: reducerName

}); 

export function isNewStudent(student) {
    return student.id === undefined || student.id.length === 0
}

export function updateStudentSagaFn(actions) {

    return function* (action){
        try {
            const { payload } = action;
            let result;
    
            if (isNewStudent(payload)) {
                result = yield call(postStudent, payload);
            }
            else {
                result = yield call(patchStudent, payload);
            }
    
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

export const updateStudentRedux = createGenericRedux("UPDATE_STUDENT", {
    sagaFn: updateStudentSagaFn, 
    reducerName: reducerName
}); 

export function deleteStudentSagaFn(actions) {

    return function* (action){
        try {
            const { payload } = action;
            const result = yield call(deleteStudent, payload);

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
const initialState = {}; 

export const studentReducer = function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case fetchAllStudentsRedux.actions.SUCCESS: {
            //Index students by student id. 
            return payload.reduce((acc, cur) => {
                return { ...acc, [cur.id]: cur };
            }, {});
        }

        case updateStudentRedux.actions.SUCCESS: {
            //Add/replace student to existing student index
            return { ...state, [payload.id]: payload }
        }

        case deleteStudentRedux.actions.SUCCESS: {
            const newState = { ...state };
            delete newState[payload.id];
            return newState;
        }


        default: return state;
    }

}

export const deleteStudentRedux = createGenericRedux("DELETE_STUDENT", {
    sagaFn: deleteStudentSagaFn, 
    reducerName: reducerName,
}); 




