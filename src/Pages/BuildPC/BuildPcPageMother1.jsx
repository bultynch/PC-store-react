import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import BuildPcSelection from '../../Components/BuildPcSelection';
import ProductCard4 from '../../Components/Product/ProductCard4';
import SecondNavBar from '../../Components/SecondNavBar';

function BuildPcPageMother1() {
  return (
    <div className=''>
      <div className='flex flex-col min-h-screen'>

        <div className=''>
          <NavBar />
          <SecondNavBar />
        </div>

        <div className='flex-grow px-80 py-4 flex flex-col bg-violet-50 dark:bg-neutral-700'>

          <div className='flex items-center justify-between'>

            <Link to='/processor1' className="w-44 h-14 mb-2 px-4 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600 "><FaArrowLeft className='w-5 h-5 mr-2'/>Paso anterior</Link>
            <Link to='/ram' className="w-44 h-14 mb-2 px-2.5 py-2 flex items-center bg-white border rounded-lg text-lg shadow-sm hover:bg-gray-100 hover:shadow-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-600">Siguiente paso<FaArrowRight className='w-5 h-5 ml-1'/></Link>

          </div>

          <div className='h-160 flex items-start justify-between py-2'>
    
            <div className=''>
              <BuildPcSelection />
            </div>



            <div className='flex flex-col items-center'>

              <div className='mb-5'>
                <ProductCard4 nombre='Mother ASUS TUF B450M-PLUS II AM4' precio={132000} imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_21972_Mother_ASUS_TUF_B450M-PLUS_II_AM4_f445a9d2-grn.jpg'/>
              </div>

            </div>

          </div>

        </div>

        <Footer />

      </div>

    </div>
  )
}

export default BuildPcPageMother1

