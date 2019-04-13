import { combineReducers } from "redux";
import { createReducers, createLoadingFlagReducer, createErrorReducer } from "./genericReduxCreators";
import { fetchAllStudentsRedux, updateStudentRedux, deleteStudentRedux, studentReducer } from "./Student/student";
import { mapEffectReducer } from "./Map";
import { keysRedux } from "./Keys";
import { symbolsRedux, symbolsReducer } from "./Symbols";

const reduxes = [
    keysRedux, 
    
]
const rootReducer = combineReducers({

    ...createReducers(
        reduxes
    ),
    symbols: symbolsReducer, 
    map: mapEffectReducer, 
    loading: createLoadingFlagReducer(reduxes), 
    error: createErrorReducer(reduxes), 
    
});


export default rootReducer; 