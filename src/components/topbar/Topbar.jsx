import React from 'react'
import './topbar.css'
import Typewriter from 'typewriter-effect';

const Topbar = () => {
  return (
    <div className='topbar-container'>
        <p>
        <Typewriter
          options={{
              strings: ['Yenice Oto Kurtarma', '7/24 Hizmetinizdeyiz'],
              autoStart: true,
              loop: true,
          }}
          />
        </p>
        <ul>
            <li>
            <i class="fa-brands fa-instagram"></i>
            </li>
            <li>
            <i class="fa-brands fa-facebook-f"></i>
            </li>
        </ul>

    </div>

  )
}

export default Topbar