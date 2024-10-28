import React from 'react';

import { Link } from 'react-router-dom';


import './Main.css';

import reactLogo from '../../assets/reactLogo.png'
import whatsApp from '../../assets/whatsApp.png'
import bulb from '../../assets/bulb.png'
import nodejsIcon from '../../assets/Nodejs.png'

import  htmlIcon from '../../assets/html5.png'
import cssIcon from '../../assets/css3.png'
import jsIcon from '../../assets/js.png'



function Main() {
  return (
    <div className='main'>
        <div className='main__topSection'> 
            <div className='main__design'></div>

            <h1 >FULL-STACK <br /> DEVELOPER  </h1>

            <div className='main__topSection-semicircle'> </div>
        </div>

        <div className='main__midSection'> 
            <div className='main__midSection-semicircle'> </div>

            <img src={reactLogo} alt='react logo' />

            <div className='main__midSection-descrip'>
                <p >Hi, I am Naveen Gaur. </p><br />

                <p>I'm passionate about transforming digital ideas into intuitive, user-friendly websites using React and responsive design.  </p>

                <Link to='https://wa.me/919920899845' target='_blank' className='main__midSection-whatsapp' alt='whatsapp'>
                    Chat on Whatsapp<img src={whatsApp} alt='whatsapp'></img>          
                </Link>

            </div>     
                 
        </div>

        <div className='main__bottomSection'>

            <div className='main__bottomSection-title'>
                <h1> TURNING IDEAS <br /> INTO REALITIES</h1>

                <div className='main__bulb'>
                    <img src={bulb} alt='bulb' ></img>
                </div>

             
            </div>
            

            <div className='main__bottomSection-icons'>
                <img src={htmlIcon} alt='HTML logo'></img>
                <img src={cssIcon} alt='CSS logo'></img>
                <img src={jsIcon} alt='Javascript logo'></img>
                <img src={reactLogo} alt='React logo'></img>
                <img src={nodejsIcon} alt='Nodejs logo'></img>
            </div>

            <div className='main__bottomSection-wrapper'>
                <a href='#'className='main__bottomSection-whatsapp' alt='whatsapp'>Whatsapp</a>
                <a href='#projects' className='main__bottomSection-button'>Projects</a>        
            </div>
            
        

        </div>
    </div>
  )
}

export default Main