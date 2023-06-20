import React from 'react'
import Maps from './maps/Maps'
import './maps.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-main">
          <ul>
            <h2>İletişim Bilgileri</h2>
              <li>
                <span><i class="fa-solid fa-phone"></i></span>
                <p><span>Telefon:</span>0533-344-86-50 <br /> 0536-722-47-07 </p>
              </li>
              <li>
                <span><i class="fa-brands fa-instagram"></i></span>
                <p><span>İnstagram:</span>yenice_otokurtarma_emre</p>
              </li>
              <li>
                <span><i class="fa-solid fa-envelope"></i></span>
                <p><span>Email:</span>Emreyucel016@outlook.com <br /> Onuryucel016@outlook.com </p>
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