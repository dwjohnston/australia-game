import {createGenericRedux} from "./genericReduxCreators"; 
import { all, takeLeading, put, call } from "redux-saga/effects";


export const reducerName = "map"; 

const SIZE = 20; 
const initMap = new Array(SIZE).fill(true).map((v,i) => {
    return new Array(SIZE).fill(true).map((v,j) => {
        return {
            x: i, 
            y: j, 
            color: "orange"   // need to init four diff tribes
        }
    });     
}); 

initMap[0][0].color ="blue";
initMap[10][10].color = "red"; 
initMap[15][15].color = "green"; 
initMap[0][15].color = "purple"; 




export const mapItemSelector = (state, x,y) => {
 return    state[reducerName][x][y] 
}; 

export const mapRedux = createGenericRedux("UPDATE_MAP", {
    reducerName: reducerName, 
    initialState: initMap, 
}); 



