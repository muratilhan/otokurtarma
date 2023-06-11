import React from 'react'
import './images.css'
import images from './ImagesDB'
import { useEffect } from 'react'


const Images = ({toggleModal, setImgSource}) => {

  const handleClick = (img) => {
    setImgSource(img);
    console.log(img)
    toggleModal();
  }

  useEffect(()=>{
    
    const observer = new IntersectionObserver((entries)=>(
      entries.forEach((entry)=>{
          entry.target.classList.toggle('activated-images', entry.isIntersecting)
      })
    ),{threshold:0.1})
    const images = document.querySelectorAll('.galery-images');
    images.forEach(item=>{
      observer.observe(item)
    })
  },[])


  return (
    <div className='images-container'>
        {images.map(item=>(
            <div onClick={()=>handleClick(item.img)} className='test'>
                <img  className='galery-images' src={item.img} alt="" />
                <div className='empty'>
                    <p></p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default Images