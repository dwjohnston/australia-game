import { combineReducers } from "redux";
import { createReducers, createLoadingFlagReducer, createErrorReducer } from "./genericReduxCreators";
import { fetchAllStudentsRedux, updateStudentRedux, deleteStudentRedux, studentReducer } from "./Student/student";
import { mapRedux } from "./Map";
import { keysRedux } from "./Keys";

const reduxes = [
    mapRedux,
    keysRedux
]
const rootReducer = combineReducers({

    ...createReducers(
        reduxes
    ),
    loading: createLoadingFlagReducer(reduxes), 
    error: createErrorReducer(reduxes), 
    
});


export default rootReducer; 