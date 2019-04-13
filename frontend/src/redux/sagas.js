import { all, takeLeading, put, call } from "redux-saga/effects";
import { fetchAllStudentsRedux, deleteStudentRedux, updateStudentRedux } from "./Student/student";
import { keysRedux } from "./Keys";


const reduxes = [
    keysRedux
]
console.log(reduxes);
export default function* rootSaga() {
    yield all([
        ...reduxes.map(v => v.sagaWatcher())
    ])
}