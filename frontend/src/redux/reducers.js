import { combineReducers } from "redux";
import { createReducers, createLoadingFlagReducer, createErrorReducer } from "./genericReduxCreators";
import { fetchAllStudentsRedux, updateStudentRedux, deleteStudentRedux } from "./Student/student";

const reduxes = [
    fetchAllStudentsRedux, 
    updateStudentRedux,
    deleteStudentRedux
]
const rootReducer = combineReducers({

    ...createReducers(
        reduxes
    ),
    loading: createLoadingFlagReducer(reduxes), 
    error: createErrorReducer(reduxes), 
    
});


export default rootReducer; 