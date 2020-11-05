import React, { useEffect, useRef, useState } from 'react';

import './home.styles.scss';
import profile from '../../assets/profile-removebg.png'
import { connect } from 'react-redux';
import { rootState } from '../../redux/root-reducer';
import { setScrollYOffset } from '../../redux/position/position.action';
import { selectCurrentPosition } from '../../redux/position/position.select';
import { createStructuredSelector } from 'reselect';

interface props extends stateProps{

    setOffsetY:typeof setScrollYOffset;
}
const Home=({offsetY,setOffsetY}:props)=>{
    // const person=useRef<HTMLImageElement>(null);
    //const [offsetY,setOffsetY]=useState(0);
    const handleScroll=()=>setOffsetY(window.pageYOffset);
    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>window.removeEventListener("scroll",handleScroll);
    },[])
    

    return <div className='home' id="home">
        <div className='overlay'>
            <h1 style={{transform:`translateX(-${offsetY*0.2}px)`, opacity:`${1-offsetY/300}`}}>AWS Certified Software Developer</h1>
        </div>
        <img className="person" src={profile} alt="profile" style={{filter: "grayscale(1) contrast(8)",transform:`translateX(${offsetY*1.1}px)`}}/>

        
    </div>
}
// const mapStateToProps=(state:rootState)=>({
//     offsetY:selectCurrentPosition(state)
// })
interface stateProps{
    offsetY:number;
}
const mapStateToProps=createStructuredSelector<rootState,stateProps>({
    offsetY:selectCurrentPosition
})
const mapDispatchToProps=(dispatch: (arg0: { type: string; payload: number; }) => any)=>({
    setOffsetY:(pageYoffset:number)=>dispatch(setScrollYOffset(pageYoffset))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);