import React from "react";
import "./main.css";
import datas from './data'
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Main = () => {


  useEffect(()=>{

    const observer = new IntersectionObserver((entries)=>(
      entries.forEach((entry)=>{
          entry.target.classList.toggle('activated-images', entry.isIntersecting)
          
      })
    ),{threshold:0.1})
    const images = document.querySelectorAll('.main-animation');
    images.forEach(item=>{
      observer.observe(item)
    })
  },[])


  return (
    <div className="main-container">
      <div className="main-header">
        <div className="main-title">
          <h2 className="tit main-animation">
            <span>Yenice Oto Kurtarma</span>'ya Hoşgeldiniz
          </h2>
          <p className="tit main-animation">
            Aracınız arızalandı mı veya yolda mı kaldınız? Endişelenmeyin! Size
            7/24 profesyonel hizmet sunabileceğimiz en doğru adrestesiniz. Oto
            Yol Yardım, Oto Çekici ve Oto Kurtarma hizmetlerimizle, uzman
            ekibimiz her zaman yanınızda.
          </p>
        </div>
      </div>

      <div className="main-pictures">
        {datas.map((item) => (
          <div className="main-img-container">
            <img className="main-images main-animation" src={item.image} alt="" />
            <div className="main-text main-animation">
            </div>
          </div>
        ))}				

      </div>
      <p className="main-info"> "<span className="vehicles">Traktör, iş makinesi, minibüs, otomobil, motor</span> vb. araçlar için hizmetlerimiz mevcuttur. Detatlı bilgi için <Link to="/contact"><span>İletişim</span></Link>'e geçiniz."</p>
    </div>
  );
};

export default Main;
