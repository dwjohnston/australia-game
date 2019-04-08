import { all, takeLeading, put, call } from "redux-saga/effects";
import { fetchAllStudentsRedux, deleteStudentRedux, updateStudentRedux } from "./Student/student";


const reduxes = [
    fetchAllStudentsRedux, 
    updateStudentRedux,
    deleteStudentRedux
]

export default function* rootSaga() {
    yield all([
        ...reduxes.map(v => v.sagaWatcher)
    ])
}