import React from 'react'
import Maps from './maps/Maps'
import './maps.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-main">
          <ul>
            <h2>İletişim</h2>
              <li>
                <span><i class="fa-solid fa-phone"></i></span>
                <p><span>Telefon:</span>5555 555 55 55</p>
              </li>
              <li>
                <span><i class="fa-brands fa-instagram"></i></span>
                <p><span>İnstagram:</span>yeniceotokurtarma</p>
              </li>
              <li>
                <span><i class="fa-solid fa-envelope"></i></span>
                <p><span>Adres:</span>yeniceotokurtarma@gmail.com</p>
              </li>
              <li>
                <span><i class="fa-solid fa-location-dot"></i></span>
                <p><span>Adres:</span>Osmaniye, Bursa Eskişehir Yolu No:2, 16400 İnegöl/Bursa</p>
              </li>
          </ul>
          <Maps/>
      </div>
      <div className='contact-text'>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui culpa voluptatum consequuntur neque, suscipit veniam modi fuga nesciunt exercitationem"
      </div>
    </div>
  )
}

export default Contact