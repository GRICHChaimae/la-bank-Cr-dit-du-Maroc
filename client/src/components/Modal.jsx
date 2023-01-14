import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Input from './Input'
import Button from './Button'

export default function Modal({ setOpenModal }) {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        CIN:"",
        password:"",
        email:"",
    })

    const onChange =(e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const addClient = async (e) => {
        try {
            await axios.post("http://localhost:5000/api/dashboard/addClient", formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Accept'       : 'application/json'
                }
            }).then((res) => navigate('/admin/dashboard'))
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <div className="fixed inset-0 z-10 overflow-y-auto">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setOpenModal(false)}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <div className="px-6 py-4 mt-6 overflow-hidden bg-white shadow-md ">
                                    <form>
                                        <Input htmlFor="fname" type="text" name="fname" children="Nom" onChange={onChange}/>
                                        <Input htmlFor="lname" type="text" name="lname" children="Prénom" className='mt-4' onChange={onChange}/>
                                        <Input htmlFor="CIN" type="text" name="CIN" children="CIN" className='mt-4' onChange={onChange}/>
                                        <Input htmlFor="email" type="text" name="email" children="Email" className='mt-4' onChange={onChange}/>
                                        <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4' onChange={onChange}/>
                                        <div className="mt-4">
                                            <Button type="submit" className="bg-cyan-600" onClick={addClient} >Enregistrer</Button>
                                        </div>
                                    </form>
                                </div>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>

    </>
  )
}
