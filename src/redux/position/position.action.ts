import { PositionActionType } from "./position.types"


export const setScrollYOffset=(pageYoffset: number)=>{
    return{
        type:PositionActionType.SET_SCROLL_Y_OFFSET,
        payload:pageYoffset
    }
}


// export type positionDispatch=typeof setScrollYOffset;