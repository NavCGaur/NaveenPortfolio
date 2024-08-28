import React from 'react'

import bulb1 from '../../assets/pngwing.com.png'
import bulb2 from '../../assets/Hire2.png'

import './Bulb.css'

function Bulb() {
  return (
    <div className="bulb">
      <img src={bulb1}/> 
      <div className="neon-text">HIRE</div>
      <div className='bulbfilament'></div>


     </div>

  )
}

export default Bulb


/*  <span class="text"></span>*/
