import React from 'react';

function Sponsors() {
  const imageUrls = {
    lenovo: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo-1.png',
    logitech: 'https://1000logos.net/wp-content/uploads/2020/05/Logitech-Logo.png',
    amd: 'https://1000logos.net/wp-content/uploads/2020/05/Amd-logo.jpg',
    hyperx: 'https://1000logos.net/wp-content/uploads/2021/04/HyperX-logo.png',
    corsair: 'https://1000logos.net/wp-content/uploads/2020/10/Corsair-logo.png',
    nvidia: 'https://1000logos.net/wp-content/uploads/2017/05/Nvidia-logo.jpg',
    asrock: 'https://1000logos.net/wp-content/uploads/2021/05/ASRock-logo.png',
    wd: 'https://1000logos.net/wp-content/uploads/2022/07/Western-Digital-Logo-2017.png',
    intel: 'https://1000logos.net/wp-content/uploads/2021/05/Intel-logo.png',
    gigabyte: 'https://1000logos.net/wp-content/uploads/2020/05/Gigabyte-logo.jpg',
    thermaltake: 'https://1000logos.net/wp-content/uploads/2023/07/Thermaltake-logo.jpg',
  };
  return (
    <div className='mx-10 carousel carousel-center'>
      
      <div className='carousel-item mx-10'>
        <img src={imageUrls.lenovo} alt='lenovo-logo' className='w-80 h-48' />
      </div> 
      <div className='carousel-item mx-10'>
        <img src={imageUrls.logitech} alt='logitech-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.amd} alt='amd-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.hyperx} alt='hyperx-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.corsair} alt='corsair-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.nvidia} alt='nvidia-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.asrock} alt='asrock-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.wd} alt='wd-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.intel} alt='intel-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.gigabyte} alt='gigabyte-logo' className='w-80 h-48' />
      </div>
      <div className='carousel-item mx-10'>
        <img src={imageUrls.thermaltake} alt='thermaltake-logo' className='w-80 h-48' />
      </div>
      
    </div>
  );
}

export default Sponsors;
