import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../Components/BuildPcSelection';
import ProductCard4 from '../Components/ProductCard4';

function BuildPcPageMother2() {
  return (
    <div className='flex flex-col min-h-screen'>

      <div className=''>
        <NavBar />
      </div>

      <div className='px-80 py-10 flex flex-col bg-gray-50'>

        <div className='flex items-center justify-between'>

          <Link to='/ram' className="w-44 h-14 mb-5 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none"><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
          <Link to='/case' className="w-44 h-14 mb-5 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>

        </div>

        <div className='h-160 flex items-start justify-between '>
          
          <div className='p-4 shadow-sm rounded-lg bg-white'>
            <BuildPcSelection />
          </div>

          <div className='flex flex-col items-center'>

            <div className='mb-5 bg-white'>
              <ProductCard4 nombre='Fuente Cougar 750W 80 Plus Gold GEC750' precio={123000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_39112_Fuente_Cougar_750W_80_Plus_Gold_GEC750_1d2f2d18-grn.jpg'/>
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default BuildPcPageMother2