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
                <p><span className='contact-bold'>Telefon:</span> <p className='contact-info'>0533-344-86-50 <br /> 0536-722-47-07 </p> </p>
              </li>
              <li>
                <span><i class="fa-brands fa-square-instagram"></i></span>
                <p><span className='contact-bold'>İnstagram:</span> <p className='contact-info'>yenice_otokurtarma_emre</p></p>
              </li>
              <li>
                <span><i class="fa-solid fa-envelope"></i></span>
                <p><span className='contact-bold'>Email:</span> <p className='contact-info'> Emreyucel016@outlook.com <br /> Onuryucel016@outlook.com</p> </p>
              </li>
              <li>
                <span><i class="fa-solid fa-location-dot"></i></span>
                <p><span className='contact-bold'>Adres:</span> <p className='contact-info'>Osmaniye, Bursa Eskişehir Yolu No:2, 16400 İnegöl/Bursa</p></p>
              </li>
          </ul>
          <Maps/>
      </div>
      <div className='contact-text'>
        "Bizlere telefon, mail, sosyal medya ve belirtilen konumdan ulaşabilirsiniz. Herhangi bir dilek, şikayet, önerilerinizi bildirmeyi unutmayınız. Bu sayede sizlere daha iyi hizmet verebiliriz."
      </div>
    </div>
  )
}

export default Contact