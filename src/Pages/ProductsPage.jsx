import React from 'react';
import NavBar from '../Components/NavBar';
import Product from '../Components/Product/ProductCard';
import ProductCategory from '../Components/Product/ProductCategory'
import Footer from '../Components/Footer'
import ProductFilter from '../Components/Product/ProductFilter';
import SecondNavBar from '../Components/SecondNavBar';

function ProductsPage() {
  return (
    <div className=''>
      <NavBar />
      <SecondNavBar />

      <div className='flex-grow py-4 px-80 flex items-start justify-between bg-violet-50 dark:bg-neutral-700'>

        <div className='mr-2 w-full'>
          
          <div className='mb-4'>
            <ProductCategory />
          </div>

          <div>
            <ProductFilter />
          </div>

        </div>

        <div className='ml-2 flex flex-col'>

          <div className='mb-2'>
            <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

          <div className='my-2'>
            <Product nombre='Placa de video ASUS GeForce RTX 4080 16GB GDDR6X ROG STRIX OC' precio={479000}imagen='https://imagenes.compragamer.com/productos/compragamer_Imganen_general_38987_Placa_de_Video_ASUS_GeForce_RTX_4060_8GB_GDDR6_Dual_White_OC_4e9dd699-grn.jpg'/>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
};

export default ProductsPage