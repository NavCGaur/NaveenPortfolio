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
        <div className={`skills__leftBorder ${isVisible?'visible':''}`}></div>
        <div className={`skills__rightBorder ${isVisible?'visible':''}`}></div>

      </div>

      <h1  className={`skills__skill-title ${isVisible?'visible':''}`} >SKILLS</h1>

      <div className='skills__skill-icons' >
        <img src={htmlIcon} alt='HTML logo' className={`skills__skill-slideRightAnim ${isVisible?'visible':''}`} ></img>
        <img src={cssIcon} alt='CSS logo' className={`skills__skill-slideRightAnim ${isVisible?'visible':''}`} ></img>
        <img src={jsIcon} alt='Javascript logo' className={`skills__skill-zoomAnim ${isVisible?'visible':''}`}></img>
        <img src={reactLogo} alt='React logo' className={`skills__skill-slideLeftAnim ${isVisible?'visible':''}`} ></img>
        <img src={nodejsIcon} alt='Nodejs logo' className={`skills__skill-slideLeftAnim ${isVisible?'visible':''}`} ></img>
      </div>

    
      <h1  className={`skills__tools-title ${isVisible?'visible':''}`} >TOOLS</h1>

      <div className='skills__tools-icons'>
        <img src={figma} alt='figma logo' className={`skills__skill-slideRightAnim ${isVisible?'visible':''}`}></img>
        <img src={vscode} alt='vscode logo' className={`skills__skill-slideRightAnim ${isVisible?'visible':''}`}></img>
        <img src={github} alt='github logo' className={`skills__skill-slideLeftAnim ${isVisible?'visible':''}`}></img>
        <img src={postman} alt='postman logo' className={`skills__skill-slideLeftAnim ${isVisible?'visible':''}`}></img>

      </div>

      <div className='skills__border'>
        <div className={`skills__leftBorder ${isVisible?'visible':''}`}></div>
        <div className={`skills__rightBorder ${isVisible?'visible':''}`}></div>

      </div>

    </div>
  )
}

export default Skills