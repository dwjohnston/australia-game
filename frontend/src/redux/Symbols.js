import {createGenericRedux} from "./genericReduxCreators"; 
import { all, takeLeading, put, call } from "redux-saga/effects";
import { reverseLookup, RANDOMIZE_SYMBOLS_ACTION } from "./Keys";


export const reducerName = "symbols"; 


export const symbolTypes = {
    A: "A", 
    B: "B", 
    C:"C", 
    D:"D", 
}


const getRandomSymbol = () => {
    return Object.values(symbolTypes)[Math.floor(Math.random() * 4)]; 
}

export const symbolSelector = (state, id) => {
    return state[reducerName][id]; 
}

export const symbolSelectorByKeyCode = (state, keyCode) => {
    console.log(keyCode, reverseLookup[keyCode]); 
    return state[reducerName][reverseLookup[keyCode]]
}

const randomizeSymbols = () => ({

    Q: getRandomSymbol(), 
    W: getRandomSymbol(), 
    E: getRandomSymbol(), 
}); 

export const symbolsReducer = (state = randomizeSymbols(), action) => {

    if (action.type === RANDOMIZE_SYMBOLS_ACTION) {
        return randomizeSymbols(); 
    }

    return state; 
}

export const symbolsRedux = createGenericRedux("INIT_SYMBOLS", {
    reducerName: reducerName, 
    initialState: randomizeSymbols(), 
}); 



