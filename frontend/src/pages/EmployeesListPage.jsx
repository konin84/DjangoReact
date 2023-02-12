import React, {useState, useEffect} from 'react'


const EmployeesListPage = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = async() => {
    const response = await fetch('http://localhost:8000/api/employees/')
    const data = await response.json()
    // console.log('DATA', data)
    setEmployees(data)
  }

  const handleDelete = (id) => {
    const i = employees.map(function(e){
      return e.id
    }).indexOf(id);
    employees.splice(i,1)
    // history('/');
  }

  return (
<div>
      <h1 className="text-3xl font-bold underline">{employees.length} Total employees</h1>
    
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
                                          First Name
                                      </th>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                          Last Name
                                      </th>
                                      <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                          Telephone
                                      </th>
                                      <th scope="col" className="p-4">
                                          <span className="sr-only">Edit</span>
                                      </th>
                                      <th scope="col" className="p-4">
                                          <span className="sr-only">Delele</span>
                                      </th>
                                  </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                              {employees.map((employee, index) => (
                                  <tr key={index} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">     
                                       {employee.id}
                                      </td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {employee.first_name}
                                      </td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                                        {employee.last_name}
                                        </td>
                                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {employee.telephone}
                                        </td>
                                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                          <button onClick={() => alert(employee.id)} 
                                          href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                                      </td>
                                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                          <button onClick={() => alert(employee.id)} href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
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
      


    </div>

    
  )
}

export default EmployeesListPage