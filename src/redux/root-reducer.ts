import { combineReducers } from "redux";
import positionReducer, { PositionState } from "./position/position.reducer";

export default combineReducers({
    position:positionReducer
})

export interface rootState{
    position:PositionState
}