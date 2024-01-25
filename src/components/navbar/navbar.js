import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll';
import Menu from '../../assets/mobicon.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>HOME</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>ABOUT</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={0} duration={500} className='desktopMenuListItem'>PORTFOLIO</Link>
            </div>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={()=>setShowMenu(false)}>
                <button className="desktopMenuButton">
                    <img src={contactImg} alt='' className='desktopMenuImg'></img>
                    CONTACT
                </button>
            </Link>
            <img src={Menu} alt='menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>HOME</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>ABOUT</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>PORTFOLIO</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>CONTACT</Link>
            </div>
        </nav>
    )
}

export default Navbar;