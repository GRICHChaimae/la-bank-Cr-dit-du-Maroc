import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '../../assets/logo13.png'
import Input from '../../components/Input'
import Button from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DevenirClient() {
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
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/api/users/register", formData).then((res) => {
                navigate('/client/login')
                console.log(res)
            })
        } catch (error) {
            console.log(error)
            toast(error.response.data.message)
        }
    }

  return (
    <div>
        <ToastContainer />
        <div className=" flex flex-col items-center min-h-screen pt-8 bg-gray-50">
            <div>
                <a href="/">
                    <img src={logo} alt="" className="h-10 w-13 "/>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <Input htmlFor="fname" type="text" name="fname" children="Nom" onChange={onChange}/>
                    <Input htmlFor="lname" type="text" name="lname" children="Prénom" className='mt-4' onChange={onChange}/>
                    <Input htmlFor="CIN" type="text" name="CIN" children="CIN" className='mt-4' onChange={onChange}/>
                    <Input htmlFor="email" type="text" name="email" children="Email" className='mt-4' onChange={onChange}/>
                    <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4' onChange={onChange}/>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="/client/login"
                        >
                            Avez-vous un compt? Accéder à votre espace
                        </a>
                        <Button type="submit" className="bg-cyan-600 mx-4" onClick={addClient}>Enregistrer</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
