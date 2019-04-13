import { combineReducers } from "redux";
import { createReducers, createLoadingFlagReducer, createErrorReducer } from "./genericReduxCreators";
import { fetchAllStudentsRedux, updateStudentRedux, deleteStudentRedux, studentReducer } from "./Student/student";
import { mapEffectReducer } from "./Map";
import { keysRedux } from "./Keys";
import { symbolsRedux } from "./Symbols";

const reduxes = [
    keysRedux, 
    symbolsRedux
]
const rootReducer = combineReducers({

    ...createReducers(
        reduxes
    ),
    map: mapEffectReducer, 
    loading: createLoadingFlagReducer(reduxes), 
    error: createErrorReducer(reduxes), 
    
});


export default rootReducer; 