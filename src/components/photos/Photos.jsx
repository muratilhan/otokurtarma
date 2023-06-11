import React,{useState} from 'react'
import './photos.css'
import Images from './Images'
import PopUp from '../pop-up/PopUp'


const Photos = () => {

  const [modal, setModal] = useState(false);
  const [imgSource, setImgSource] = useState("");


  const toggleModal = () => {
    setModal(!modal);
  };



  if(modal) return <PopUp imgSource={imgSource} toggleModal={()=>toggleModal()}></PopUp>

  return (
    <div className='photos-container'>
      <div className="photos-inner">
        <h2>Galeri</h2>
      </div>
      <div className='photos-title'>
      <h1 class="content">Fotoğraf Galerisi</h1>
        <p>Aracınız arıza yaptı, yolda kaldınız, aracınızın taşınması mı gerekiyor endişe etmenize gerek yok! Yenice Oto Kurtarma - İnegöl oto çekici hizmetimiz sizlere 7/24 hizmet vermekten onur duyar. Bize konumunuzu bildirmeniz yeterli. Başarı ile sonuçlandırdığımız işlerden görüntüler sunmaktan gurur duyarız...</p>

      </div>
    
      <Images setImgSource={setImgSource} toggleModal={toggleModal} />
    </div>
  )
}

export default Photos