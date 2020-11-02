import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header=()=>{
    return (
        <div className='header'>
            <Link className="logo" to='/'><h2>STEVE LI</h2></Link>
            <div className='options'>
                <Link className='option' to='project'>Projects</Link>
                <Link className='option' to='about'>About</Link>
                <a className='option' href="/resume2.pdf" download>Resume</a>

            </div>
        </div>
    )
}
export default Header;