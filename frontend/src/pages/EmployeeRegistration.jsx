import { useState } from 'react'
import { Link } from 'react-router-dom'

const cors = require('cors')



const EmployeeRegistration = () => {

const [firstName, setFirstName] = useState(null)
const [lastName, setLastName] = useState(null)
const [email, setEmail] = useState(null)
const [dob, setDob] = useState(null)
const [salary, setSalary] = useState(null)
const [telephone, setTelephone] = useState(null)

const saveEmployee = async() => {
    const response = await fetch(`http://localhost:8000/api/create`, {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        first_name:JSON.stringify(firstName),
        last_name:JSON.stringify(lastName),
        DoB:JSON.stringify(dob),
        email:JSON.stringify(email),
        telephone:JSON.stringify(telephone),
        salary:JSON.stringify(salary)
      })
    }
  

    const handleSubmit = (e) => {
    e.preventDefault()
    saveEmployee()
    }
    


  return (
  
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                Register New Employee
            </h1>
            <form className="mt-6" onSubmit={handleSubmit }>
                <div className="mb-2">
                    <label
                        htmlFor="first_name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Firstname
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => {setFirstName({...firstName, 'first_name':e.target.value})}}
                        defaultValue={firstName?.first_name}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="last_name"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Lastname
                    </label>
                    <input
                        type="text"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => {setLastName({...lastName, 'last_name':e.target.value})}}
                        defaultValue={lastName?.last_name}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"

                        onChange={(e) => {setEmail({...email, 'email':e.target.value})}}
                        defaultValue={email?.email}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="telephone"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Telephone
                    </label>
                    <input
                        type="telephone"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => {setTelephone({...telephone, 'telephone':e.target.value})}}
                        defaultValue={telephone?.telephone}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="salary"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Salary
                    </label>
                    <input
                        type="number"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => {setSalary({...salary, 'salary':e.target.value})}}
                        defaultValue={salary?.salary}
                    />
                </div>
                <div className="mb-2">
                    <label
                        htmlFor="DateOfBirth"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Date of Birth
                    </label>
                    <input
                        type="date"
                        className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => {setDob({...dob, 'DoB':e.target.value})}}
                        defaultValue={dob?.DoB}
                    />
                </div>
                <div className="mt-6">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                        Submit
                    </button>
                </div>
            </form>
            <hr/>

            <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                You can view all registered employees here!{" "}
                <button
                    href="#"
                    className="font-medium text-indigo-600 hover:underline"
                >
                    <Link to = '/'>View</Link>
                </button>
            </p>
        </div>
    </div>


  
);
}



export default EmployeeRegistration