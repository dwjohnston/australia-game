import {createGenericRedux} from "./genericReduxCreators"; 
import { all, takeLeading, put, call } from "redux-saga/effects";
import { MAP_EFFECT_ACTION } from "./Keys";


export const reducerName = "map"; 


export const mapValueTypes = {
    EMPTY: "orange", 
    VOID: "grey", 
    ONE: "red", 
    TWO: "green", 
    THREE: 'blue', 
    FOUR: 'purple',
}

console.log(mapValueTypes);
const SIZE = 20; 

const initMap = new Array(SIZE).fill(true).map((v,i) => {
    return new Array(SIZE).fill(true).map((v,j) => {
        return {
            x: i, 
            y: j, 
            color: mapValueTypes.EMPTY,  
        }
    });     
}); 

initMap[5][5].color ="blue";
initMap[10][10].color = "red"; 
initMap[15][15].color = "green"; 
initMap[5][15].color = "purple"; 




export const mapItemSelector = (state, x,y) => {
 return    state[reducerName][x][y] 
}; 

export const mapRedux = createGenericRedux("UPDATE_MAP", {
    reducerName: reducerName, 
    initialState: initMap, 
}); 


export const mapEffectReducer = (state = initMap, action) => {

    const {type, payload}= action; 

    switch (type) {
        case MAP_EFFECT_ACTION: {
            const {effect, mapItem} = payload; 
            console.log(effect, mapItem);
            const mapClone = JSON.parse(JSON.stringify(state)); 

            if (effect){
                return effect(mapClone, mapItem); 

            }
            else return state; 
        }

        case mapRedux.actionFn.SUCCESS: {
            return payload; 
        }

        default: return state; 
    }
}
