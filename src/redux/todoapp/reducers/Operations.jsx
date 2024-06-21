
import { ADD_TODO,DELETE_ALL } from "../actions/Index";

export const operationsReducer = (state=[],action)=>{
    switch(action.type){
        case ADD_TODO:
            return[...state,action.payload];
        case DELETE_ALL:
            return [];
        default:return state;
    }
}