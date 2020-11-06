import { createSelector } from "reselect";
import { rootState } from "../root-reducer";

const selectMenu=(state:rootState)=>(
    state.menu
)

export const selectCurrentOpen=createSelector(
    [selectMenu],
    menu=>menu.isOpen
)