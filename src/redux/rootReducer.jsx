import { combineReducers } from "redux"
import { operationsReducer } from "./todoapp/reducers/Operations"


export const rootReducer= combineReducers({
    operationsReducer,
    //MORE REDUCERS CAN BE ADDED HERE
})