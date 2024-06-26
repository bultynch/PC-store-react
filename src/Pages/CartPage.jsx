import React from 'react';
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'

export default function Component() {
  const cartItems = [
    {
      id: 1,
      name: "Cozy Blanket",
      price: 29.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Autumn Mug",
      price: 12.99,
      quantity: 2,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Fall Fragrance Candle",
      price: 16.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (

    <div className=''>

      <NavBar />


      <section className="w-full py-12">

        <div className="container grid gap-6 md:gap-8 px-4 md:px-6">

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">

            <div className="grid gap-1">
              <h1 className="text-2xl font-bold tracking-tight">Detalle de la compra</h1>
              <p className="text-gray-500 dark:text-gray-400">Controla los objetos del carrito antes de continuar.</p>
            </div>

          </div>

          <div className="border shadow-sm rounded-lg overflow-x-auto">

            <table className="min-w-full bg-white">

              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Image</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">Quantity</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">Price</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">Total</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <img src={item.image} width="64" height="64" alt={item.name} className="aspect-square rounded-md object-cover" />
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 font-medium text-gray-900">{item.name}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 border rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline">
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button className="px-2 py-1 border rounded-md text-gray-600 hover:text-gray-800 focus:outline-none focus:shadow-outline">
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 hidden md:table-cell">
                      <div className="text-sm leading-5 text-gray-900">${item.price.toFixed(2)}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 hidden md:table-cell">
                      <div className="text-sm leading-5 text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">

            <div className="grid gap-1">

              <h2 className="text-xl font-bold tracking-tight">Total: ${total.toFixed(2)}</h2>

            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-4 ml-auto">

              <button className="px-4 py-2 border rounded-md shadow-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:shadow-outline">Seguir comprando</button>
              <button className="px-4 py-2 border rounded-md shadow-sm bg-blue-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline text-white">Continuar con la compra</button>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </div>
    
  );
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}