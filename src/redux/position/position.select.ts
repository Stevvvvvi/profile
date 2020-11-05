import { createSelector } from "reselect";
import { rootState } from "../root-reducer";

const selectPosition=(state:rootState)=>state.position;

export const selectCurrentPosition=createSelector(
    [selectPosition],
    position=>position.pageYoffset
)