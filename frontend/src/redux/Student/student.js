import {createGenericRedux, genericApiSagaCreatorFn} from "../genericReduxCreators"; 
import { fetchAllStudents, patchStudent, postStudent, deleteStudent } from "../services/StudentService";
import { all, takeLeading, put, call } from "redux-saga/effects";

export const fetchAllStudentsRedux = createGenericRedux("FETCH_ALL_STUDENTS", {
    sagaFn: genericApiSagaCreatorFn(fetchAllStudents)
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
    sagaFn: updateStudentSagaFn
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
export const deleteStudentRedux = createGenericRedux("DELETE_STUDENT", {
    sagaFn: deleteStudentSagaFn, 
}); 




