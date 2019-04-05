import { all, takeLeading, put, call } from "redux-saga/effects";
import {
    FETCH_ALL_STUDENTS_REQUEST,
    FETCH_ALL_STUDENTS_SUCCESS,
    FETCH_ALL_STUDENTS_FAILURE,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
    UPDATE_STUDENT_FAILURE,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_FAILURE,
    DELETE_STUDENT_SUCCESS,
    CLEAR_ERRORS_REQUEST,
    CLEAR_ERRORS_FAILURE,
    CLEAR_ERRORS_SUCCESS,
} from "./actions";
import { fetchAllStudents, patchStudent, postStudent, deleteStudent } from "../services/StudentService";
export function* fetchAllStudentsSaga() {
    yield takeLeading(FETCH_ALL_STUDENTS_REQUEST, function* () {
        try {
            const result = yield call(fetchAllStudents);
            console.log(result);
            yield put({
                type: FETCH_ALL_STUDENTS_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: FETCH_ALL_STUDENTS_FAILURE,
                payload: err
            });
        }
    });
}

export function isNewStudent(student) {
    return student.id === undefined || student.id.length === 0
}

export function* updateStudentSaga() {
    yield takeLeading(UPDATE_STUDENT_REQUEST, function* (action) {
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
                type: UPDATE_STUDENT_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: UPDATE_STUDENT_FAILURE,
                payload: err
            });
        }
    });
}

export function* deleteStudentSaga() {
    yield takeLeading(DELETE_STUDENT_REQUEST, function* (action) {
        try {
            const { payload } = action;
            const result = yield call(deleteStudent, payload);

            yield put({
                type: DELETE_STUDENT_SUCCESS,
                payload: result
            })
        }
        catch (err) {

            console.error(err);
            yield put({
                type: DELETE_STUDENT_FAILURE,
                payload: err
            });
        }
    });
}

export function* clearErrorsSaga() {
    yield takeLeading(CLEAR_ERRORS_REQUEST, function* () {
        try {
            yield put({
                type: CLEAR_ERRORS_SUCCESS,
            })
        }
        catch (err) {
            yield put({
                type: CLEAR_ERRORS_FAILURE,
                payload: err
            });
        }
    });
}

export default function* rootSaga() {
    yield all([
        fetchAllStudentsSaga(),
        updateStudentSaga(),
        deleteStudentSaga(),
        clearErrorsSaga(),
    ])
}