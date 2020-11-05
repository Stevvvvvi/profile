import React, { useEffect, useRef } from 'react';
import { ArchiveFill, BarChartLineFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';


import './header.styles.scss';
import { connect } from 'react-redux';
import { rootState } from '../../redux/root-reducer';
import { setToggleMenu } from '../../redux/menu/menu.action';
interface props{
    isOpen:boolean,
    setIsOpen:typeof setToggleMenu
}
const Header=({isOpen,setIsOpen}:props)=>{
    const menubar=useRef<HTMLDivElement>(null);
    const handleMenuClick=()=>{
        if (isOpen){
            setIsOpen()
        }
    }
    const menuItems=(
        <div className='menubar'ref={menubar}>
            <Link className='option' to='project' onClick={handleMenuClick}><BarChartLineFill className='header-icon'/>Projects</Link>
            <Link className='option' to='about' onClick={handleMenuClick}>About</Link>
            <a className='option' href="/resume2.pdf" download onClick={handleMenuClick}><ArchiveFill className='header-icon'/>Resume</a>
        </div>
    )
    useEffect(()=>{
        if (isOpen && menubar && menubar.current && menubar.current.style){
            menubar.current.style.left="0"
        }else if (menubar && menubar.current && menubar.current.style){
            menubar.current.style.left="-100%"
        }
    },[isOpen])
    return (
        <div className='header'>
            <Link className="logo" to='/'><h2>STEVE LI</h2></Link>
            <div className='options'>
                {menuItems}
                <div className='option hamburger'>
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=({menu:{isOpen}}:rootState)=>({
    isOpen:isOpen
})
const mapDispatchToProps=(dispatch: (arg0: { type: string; }) => any)=>({
    setIsOpen:()=>dispatch(setToggleMenu())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);
