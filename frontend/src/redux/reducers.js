import { combineReducers } from "redux";
import { FETCH_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_SUCCESS } from "./actions";


const initialState = {};
export function productsReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_ALL_PRODUCTS_SUCCESS: {
            //Index products by product id. 
            return payload.reduce((acc, cur) => {
                return { ...acc, [cur.id]: cur };
            }, {});
        }

        case UPDATE_PRODUCT_SUCCESS: {
            //Add/replace product to existing product index
            return { ...state, [payload.id]: payload }
        }


        default: return state;
    }
}

const initialLoadingState = {
    updateProduct: false,
}



/**
 * This is obviously not a sustainable way to handle loading flags, but works for a quick demo. 
 * 
 * Better solution is a modified version of this: 
 * https://medium.com/stashaway-engineering/react-redux-tips-better-way-to-handle-loading-flags-in-your-reducers-afda42a804c6
 */
export function loadingFlagsReducer(state = initialLoadingState, action) {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_PRODUCT_REQUEST: return { ...state, updateProduct: true }
        case UPDATE_PRODUCT_SUCCESS: return { ...state, updateProduct: false }
        case UPDATE_PRODUCT_FAILURE: return { ...state, updateProduct: false }
        default: return state;

    }
}

const rootReducer = combineReducers({
    products: productsReducer,
    loadingFlags: loadingFlagsReducer,
});


export default rootReducer; 