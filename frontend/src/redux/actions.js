export const FETCH_ALL_STUDENTS_BASE =
    'FETCH_ALL_STUDENTS_BASE';
export const FETCH_ALL_STUDENTS_REQUEST =
    'FETCH_ALL_STUDENTS_REQUEST';
export const FETCH_ALL_STUDENTS_SUCCESS =
    'FETCH_ALL_STUDENTS_SUCCESS';
export const FETCH_ALL_STUDENTS_FAILURE =
    'FETCH_ALL_STUDENTS_FAILURE';
export const FETCH_ALL_STUDENTS_CLEAR =
    'FETCH_ALL_STUDENTS_CLEAR';

export function requestFetchAllStudents() {
    return {
        type: FETCH_ALL_STUDENTS_REQUEST,
        payload: null
    }
}

export const UPDATE_STUDENT_BASE =
    'UPDATE_STUDENT_BASE';
export const UPDATE_STUDENT_REQUEST =
    'UPDATE_STUDENT_REQUEST';
export const UPDATE_STUDENT_SUCCESS =
    'UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_FAILURE =
    'UPDATE_STUDENT_FAILURE';
export const UPDATE_STUDENT_CLEAR =
    'UPDATE_STUDENT_CLEAR';

export function requestUpdateStudent(studentData) {
    return {
        type: UPDATE_STUDENT_REQUEST,
        payload: studentData,
    }
}

export const DELETE_STUDENT_BASE =
    'DELETE_STUDENT_BASE';
export const DELETE_STUDENT_REQUEST =
    'DELETE_STUDENT_REQUEST';
export const DELETE_STUDENT_SUCCESS =
    'DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_FAILURE =
    'DELETE_STUDENT_FAILURE';
export const DELETE_STUDENT_CLEAR =
    'DELETE_STUDENT_CLEAR';
export function requestDeleteStudent(student) {
    return {
        type: DELETE_STUDENT_REQUEST,
        payload: student,
    }
}

export const CLEAR_ERRORS_BASE =
    'CLEAR_ERRORS_BASE';
export const CLEAR_ERRORS_REQUEST =
    'CLEAR_ERRORS_REQUEST';
export const CLEAR_ERRORS_SUCCESS =
    'CLEAR_ERRORS_SUCCESS';
export const CLEAR_ERRORS_FAILURE =
    'CLEAR_ERRORS_FAILURE';
export const CLEAR_ERRORS_CLEAR =
    'CLEAR_ERRORS_CLEAR';

export function requestClearErrors() {
    return {
        type: CLEAR_ERRORS_REQUEST,
        payload: null
    }
}

