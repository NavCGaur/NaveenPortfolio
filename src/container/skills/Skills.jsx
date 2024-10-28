import React from 'react'

import './Skills.css'


import  htmlIcon from '../../assets/html5.png'
import cssIcon from '../../assets/css3.png'
import jsIcon from '../../assets/js.png'
import reactLogo from '../../assets/reactLogo.png'
import nodejsIcon from '../../assets/Nodejs.png'

import figma from '../../assets/figma.png'
import vscode from '../../assets/vscode.png'
import github from '../../assets/github2.png'
import postman from '../../assets/postman.png'



function Skills() {

  return (
    <div className='skills'  id='skills' >

      <div className='skills__border'>
      </div>

      <h1  className='skills__skill-title' >SKILLS</h1>

      <div className='skills__skill-icons' >
        <img src={htmlIcon} alt='HTML logo' ></img>
        <img src={cssIcon} alt='CSS logo'  ></img>
        <img src={jsIcon} alt='Javascript logo' ></img>
        <img src={reactLogo} alt='React logo'  ></img>
        <img src={nodejsIcon} alt='Nodejs logo'  ></img>
      </div>

    
      <h1  className='skills__tools-title' >TOOLS</h1>

      <div className='skills__tools-icons'>
        <img src={figma} alt='figma logo'></img>
        <img src={vscode} alt='vscode logo' ></img>
        <img src={github} alt='github logo' ></img>
        <img src={postman} alt='postman logo'></img>

      </div>

      <div className='skills__border'>
  
      </div>

    </div>
  )
}

export default Skills