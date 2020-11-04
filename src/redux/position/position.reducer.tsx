import { PositionActionType } from "./position.types"

export interface PositionState{
    pageYoffset:number,
}

const INITIAL_STATE:PositionState={
    pageYoffset:0
}
const positionReducer=(state=INITIAL_STATE,action: { type: keyof typeof PositionActionType; payload: number; }):PositionState=>{
    switch(action.type){
        case PositionActionType.SET_SCROLL_Y_OFFSET:
            return {
                ...state,
                pageYoffset:action.payload
            }
        default:
            return state;
    }
}
export default positionReducer