import { combineReducers } from "redux";
import menuReducer, { menuState } from "./menu/menu.reducer";
import positionReducer, { PositionState } from "./position/position.reducer";

export default combineReducers({
    position:positionReducer,
    menu:menuReducer
})

export interface rootState{
    position:PositionState,
    menu:menuState
}