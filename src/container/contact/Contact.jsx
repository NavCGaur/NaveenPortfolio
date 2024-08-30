import React from 'react'
import { Link } from 'react-router-dom';

import './Contact.css'

function Contact() {

  const str = "TURNꞮNG ꞮDEAS ꞮNTO REALꞮTY";

  return (
  <div className="contact" id='contact'> 
     <div className='contact__wrapper'>

      <div className='contact__leftSection'>
          <p>Have an exciting idea you need help with? Let's turn your ideas into reality.</p>
          <div className='contact__details'>
            
            <div>
              Email - <Link to='mailto:naveencg070@gmail.com'>naveencg070@gmail.com</Link>
            </div>

            <div>
              Phone - <Link to='tel:+919920899845'>+919920899845</Link>
            </div>

          </div>
        </div>
      
      <div className='contact__rightSection'>
        
        
          <Link to='https://wa.me/919920899845' target='_blank' className="neon-text">Connect <br/>ME</Link>
        
        
        <div className="rotating-text" >
          {str.split('').map((char, i) => (
          <span key={i}  style={{transform: `rotate(${13*i}deg)`}}>
            {char}
          </span>
           ))
           }
        
        </div>

      </div>

     </div>
      
    <div className='contact__copyright'>
      <p>© 2024. All rights reserved. Build with 🤍 by <b>Naveen Gaur</b></p>

    </div>


     
  </div>
  )
}

export default Contact  