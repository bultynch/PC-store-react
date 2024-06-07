import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GoShieldCheck } from "react-icons/go";
import { FaCheck, FaTruck } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CartPage from '../Pages/CartPage.jsx';

const ProductCard3 = ({ nombre, precio, imagenes, onAddToCart }) => {

  const images = {
    'main': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33401_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_589f396b-grn.jpg',
    'img-2': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33402_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_59981144-grn.jpg',
    'img-3': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33403_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_de9bc156-grn.jpg',
    'img-4': 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_33404_Placa_de_Video_XFX_Radeon_RX_6650_XT_8GB_GDDR6_Speedster_SWFT_210_e3e7dde9-grn.jpg',
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-4 flex flex-col md:flex-row items-center justify-center rounded-2xl shadow-sm bg-white">

      <div className="w-full md:w-1/2 p-4 flex flex-col justify-start">

        <img src={images['main']} alt="prod-pic" className="mb-5 w-160 h-auto border border-black" />

        <div className='w-full h-32 border border-black flex items-center justify-center'>

          <Slider {...settings}>
            <div>
              <img src={images['main']} alt='prod-pic-1' className='w-full h-28 object-contain' />
            </div>
            <div>
              <img src={images['img-2']} alt='prod-pic-2' className='w-full h-28 object-contain' />
            </div>
            <div>
              <img src={images['img-3']} alt='prod-pic-3' className='w-full h-28 object-contain' />
            </div>
            <div>
              <img src={images['img-4']} alt='prod-pic-4' className='w-full h-28 object-contain' />
            </div>
          </Slider>

        </div>

      </div>

      <div className="h-full p-4 md:w-1/2 flex flex-col justify-between">

        <div className="border border-black p-4">
          <h1 className="text-2xl md:text-3xl font-normal">{nombre}</h1>
        </div>

        <div className="my-4 border-t"></div>

        <div className="border border-black p-4">

          <h1 className=" text-blue-500 text-3xl md:text-5xl font-semibold">${precio}</h1>
          <h1 className="my-2 text-xl">12 cuotas sin interés de ${(precio / 12)}</h1>

          <h1 className='text-xl'>Precio de lista $ {(precio + 100000)}</h1>

        </div>

        <div className="my-4 border-t"></div>

        <div className='p-4 border border-black'>

          <div className='flex items-center justify-start'>
            <GoShieldCheck className='pr-1 text-green-500 text-2xl'/>
            <h1 className='text-green-500 text-xl'>Garantía - 12 meses</h1>
          </div>

          <div className='my-1 flex items-center justify-start'>
            <FaCheck className='pr-1 text-green-500 text-xl'/>
            <h1 className='text-green-500 text-xl'>Stock disponible.</h1>
          </div>
          
          <div className='flex items-center justify-start'>
            <FaTruck className='pr-1 text-green-500 text-2xl'/>
            <h1 className='text-green-500 text-xl'>Envíos a todo el país.</h1>
          </div>
          
        </div>

        <div className="my-4 border-t"></div>

        <div className="border border-black p-4 flex flex-col md:flex-row">

          <button className="p-4 m-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800">Comprar</button>
          <Link to="/carrito" onClick={onAddToCart} className="p-4 m-2 bg-gray-100 rounded-lg font-semibold hover:bg-gray-200 text-center md:text-left">Agregar al carrito</Link>

        </div>

      </div>

      <Routes>
        <Route path="/carrito" element={<CartPage />} />
      </Routes>

    </div>
  );
}

export default ProductCard3;