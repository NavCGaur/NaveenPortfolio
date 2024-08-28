import React, {useState, useEffect} from 'react'

import './Header.css'

import profileImage from '../../assets/profileImage.jpg'

import {ReactComponent as MenuIcon} from '../../assets/menu.svg'
import {ReactComponent as CloseIcon} from '../../assets/xmark.svg'

function Header() {


    const [menuStatus, setMenuStatus] = useState(false);

    function handleMenu(){
      if (window.innerWidth < 550){
      setMenuStatus(!menuStatus);
      }
  
    }
  
    // Add an event listener to handle window resize
    useEffect(() => {
      function handleResize() {
        if (window.innerWidth > 550) {
          setMenuStatus(false);
        }
      }
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  


  return (
    <header className='header' id='home'>
        <div className='header__container'>
            
            <div className='header__intro'>
                <div className='header__profileImage'>
                    <img src={profileImage} className='header__profileImage' alt='profile'></img>
                </div>

                <div className='header__name'>
                    <h1>Naveen <br /> Gaur</h1>
                </div>
            </div>

            <div className='header__menu' onClick={handleMenu}>
                {menuStatus? <CloseIcon className= 'navbar__close-icon'/> : <MenuIcon className='navbar__menu-icon'  / >
                }
            </div>

            <nav className={menuStatus?'header__navbar-hidden':'header__navbar'} >
                <a href='#home' className='header__home' onClick={handleMenu}>Home</a>
                <a href='#skills' className='header__skill' onClick={handleMenu}>Skill</a>
                <a href='#projects'className='header__projects' onClick={handleMenu}>Projects</a>
                <a href='#contact' className='header__contact' onClick={handleMenu}>Contact</a>
            </nav>

        </div>    

    </header>
  )
}

export default Header

