import React, { RefObject, useEffect, useRef, useState } from 'react';

import './cursor.styles.scss';

const Cursor=()=>{
    const mainCursor=useRef<HTMLDivElement>(null);
    const secCursor=useRef<HTMLDivElement>(null);
    const tirCursor=useRef<HTMLDivElement>(null);
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
            // if (secCursor && secCursor.current && secCursor.current.style){
            //     secCursor.current.style.left=e.pageX+'px';
            //     const yPosition=e.pageY-window.pageYOffset;
            //     secCursor.current.style.top=yPosition+'px';
            // }   
            // if (tirCursor && tirCursor.current && tirCursor.current.style){
            //     tirCursor.current.style.left=e.pageX+'px';
            //     const yPosition=e.pageY-window.pageYOffset;
            //     tirCursor.current.style.top=yPosition+'px';
            // }   
        }
        window.addEventListener('mousemove',handleMove)
        //return window.removeEventListener('mousemove',handleMove)
    },[])
    return (<div>
        <div className='main-cursor'ref={mainCursor}></div>
        {/* <div className='sec-cursor'ref={secCursor}></div> */}
        {/* <div className='tir-cursor'ref={tirCursor}></div> */}
    </div>
        
    )
}
export default Cursor;