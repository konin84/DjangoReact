import React, {useState, useEffect} from 'react'

const ProductList = () => {

  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async() => {
    const response = await fetch('http://localhost:8000/api/products/')
    const data = await response.json()
    // console.log('DATA', data)
    setProducts(data)
  }

  return (
    <div className="max-w-2xl mx-auto">

            <div className="flex flex-col">
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden ">
                          <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                              <thead className="bg-gray-100 dark:bg-gray-700">
                                  <tr>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        #
                                      </th>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                          Product
                                      </th>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                          Price
                                      </th>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                          Digital
                                      </th>
                                      <th scope="col" className="p-4">
                                          <span className="sr-only">Edit</span>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                              {products.map((product, index) => (
                                  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.id}  
                                      </td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.name}</td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{product.price}</td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{product.digital}</td>
                                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                          <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                      </td>
                                  </tr>
                                  ))}                   
                                  </tbody>
                          </table>
                      </div>
                  </div>
              </div>
            </div>

        
      </div>
  )
}

export default ProductList