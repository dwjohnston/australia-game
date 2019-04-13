import {createGenericRedux} from "./genericReduxCreators"; 
import { all, takeLeading, put, call } from "redux-saga/effects";


export const reducerName = "keys"; 

export function cursorSelector(state, x, y) {
    return state[reducerName].x ===x && state[reducerName].y ===y; 
}


export const keys = {
    LEFT: 37, 
    RIGHT: 39, 
    UP: 38, 
    DOWN: 40, 

}

const keysArray = Object.values(keys); 

const keysReducer = (state = {
    x: 0, 
    y: 0, 
}, action) => {

    const {type, payload} = action; 

    switch(type) {
        case keysRedux.actions.SUCCESS: {
            

            switch(payload) {
                case keys.LEFT : {
                    return {
                        ...state, 
                        x: state.x -1, 
                    }
                }

                case keys.RIGHT : {

                    return {
                        ...state, 
                        x: state.x +1, 
                    }

                }

                case keys.UP : {
                    return {
                        ...state, 
                        y: state.y -1, 
                    }


                }

                case keys.DOWN :  {
                    return {
                        ...state, 
                        y: state.y +1, 
                    }
                }

                default: return state; 
            }
        }

        default: return state
    }
    
}

export const keysRedux = createGenericRedux("KEY_STROKE", {
    reducerName: reducerName, 
    reducer: keysReducer, 
}); 



