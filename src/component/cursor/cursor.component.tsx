import React, { RefObject, useEffect, useRef, useState } from 'react';

import './cursor.styles.scss';

const Cursor=()=>{
    const mainCursor=useRef<HTMLDivElement>(null);
    // const secondaryCursor=useRef(null);
    // const positionRef=useRef({
    //     mouseX:0,
    //     mouseY:0,
    //     destinationX:0,
    //     destinationY:0,
    //     distanceX:0,
    //     distanceY:0,
    //     key:-1
    // })
    // useEffect(()=>{
    //     document.addEventListener("mousemove",(event:MouseEvent)=>{
    //         const {clientX,clientY}=event;
    //         positionRef.current.mouseX=
    //         clientX-secondaryCursor.current?.clientWidth/2;
    //         positionRef.current.mouseY=
    //         clientY-secondaryCursor.current?.clientWidth/2;

    //     })
    // })
    
    useEffect(()=>{
        const handleMove=(e:MouseEvent)=>{
            if (mainCursor && mainCursor.current && mainCursor.current.style){
                    mainCursor.current.style.left=e.pageX+'px';
                    const yPosition=e.pageY-window.pageYOffset;
                    mainCursor.current.style.top=yPosition+'px';
            }
        }
        window.addEventListener('mousemove',handleMove)
        //return window.removeEventListener('mousemove',handleMove)
    },[])
    return (
        <div className='main-cursor'ref={mainCursor}></div>
    )
}
export default Cursor;