import { MenuActionType } from "./menu.types"

export interface  menuState{
    isOpen:boolean
}
const INITIAL_STATE:menuState={
    isOpen:false
}

const menuReducer=(state=INITIAL_STATE,action: { type: keyof typeof MenuActionType,payload?:any }):menuState=>{
    switch (action.type){
        case MenuActionType.TOGGLE_MENU:
            return {
                ...state,
                isOpen:!state.isOpen,
            }
        default:
            return state
    }
}

export default menuReducer;