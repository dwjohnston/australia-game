import {createGenericRedux} from "./genericReduxCreators"; 
import { all, takeLeading, put, call,select } from "redux-saga/effects";
import { mapItemSelector } from "./Map";
import { symbolSelector, symbolSelectorByKeyCode, symbolTypes } from "./Symbols";


export const reducerName = "keys"; 

export function cursorSelector(state, x, y) {
    return state[reducerName].x ===x && state[reducerName].y ===y; 
}


export const keys = {
    LEFT: 37, 
    RIGHT: 39, 
    UP: 38, 
    DOWN: 40, 
    Q: 81, 
    W: 87, 
    E: 69

}

export const reverseLookup = {
    [81]: "Q", 
    [87]: "W", 
    [69]: "E"
};

const moveKeys = [keys.LEFT, keys.RIGHT, keys.UP, keys.DOWN]; 
const actionKeys= [keys.Q, keys.W, keys.E]; 

const effects = {
    GROW_DOWN: (map, mapItem) => {
        map[mapItem.x][mapItem.y+1].color = mapItem.color; 
        return map;  
    },
    GROW_RIGHT:  (map, mapItem) => {
        map[mapItem.x +1][mapItem.y].color = mapItem.color; 
        return map;  
    },
    GROW_UP:  (map, mapItem) => {
        map[mapItem.x][mapItem.y-1].color = mapItem.color; 
        return map;  
    },
    GROW_LEFT: (map, mapItem) => {
        map[mapItem.x-1][mapItem.y].color = mapItem.color; 
        return map;  
}}


export const mapValueTypes = {
    EMPTY: "orange", 
    VOID: "grey", 
    ONE: "red", 
    TWO: "green", 
    THREE: 'blue', 
    FOUR: 'purple',
}
console.log(mapValueTypes);
const symbolMatrix = {
    [mapValueTypes.ONE] : {
        [symbolTypes.A] : effects.GROW_DOWN, 
        [symbolTypes.B] : effects.GROW_RIGHT, 
        [symbolTypes.C] : effects.GROW_UP, 
        [symbolTypes.D] : effects.GROW_LEFT, 

    }, 
    [mapValueTypes.TWO] : {
        [symbolTypes.A] : effects.GROW_DOWN, 
        [symbolTypes.B] : effects.GROW_RIGHT, 
        [symbolTypes.C] : effects.GROW_UP, 
        [symbolTypes.D] : effects.GROW_LEFT, 
    }, 
    [mapValueTypes.THREE] : {
        [symbolTypes.A] : effects.GROW_DOWN, 
        [symbolTypes.B] : effects.GROW_RIGHT, 
        [symbolTypes.C] : effects.GROW_UP, 
        [symbolTypes.D] : effects.GROW_LEFT, 
    }, 
    [mapValueTypes.FOUR] : {
        [symbolTypes.A] : effects.GROW_DOWN, 
        [symbolTypes.B] : effects.GROW_RIGHT, 
        [symbolTypes.C] : effects.GROW_UP, 
        [symbolTypes.D] : effects.GROW_LEFT, 
    }, 
}

const handleSymbolAction = (mapItem, symbolItem) =>  {
    console.log(mapItem, symbolItem); 


    if (mapItem.color === mapValueTypes.EMPTY) {    //Do nothing
        return; 
    }

    return {
        effect: symbolMatrix[mapItem.color][symbolItem], 
        mapItem: mapItem, 
    }

   
}

export const MAP_EFFECT_ACTION = "MAP_EFFECT_ACTION"; 

const keyPressSagaFn = (actions) => {
    return function* (action) {


        console.log(action, moveKeys)
        const {payload} = action;

        if (moveKeys.includes(payload)) {   //Just standard keypress
            console.log("move keys"); 
            yield put({
                type: actions.SUCCESS, 
                payload: payload
            });
        }
        else if (actionKeys.includes(payload)) {

        //Otherwise trigger additional functionality


        const state = yield select();
        const {map, keys, symbols} = state; 

        const mapItem = mapItemSelector(state, keys.x, keys.y); 
        const symbolItem = symbolSelectorByKeyCode(state, payload); 
        const effect = handleSymbolAction(mapItem, symbolItem);
        
        yield put({
            type: MAP_EFFECT_ACTION, 
            payload: effect, 
        })
        console.log(state);
        console.log("action press"); 



        }
        else {
            yield put({
                type: actions.FAILURE
            });
        }


    }
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
    sagaFn: keyPressSagaFn, 
}); 



