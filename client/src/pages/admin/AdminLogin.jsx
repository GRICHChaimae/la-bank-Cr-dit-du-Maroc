import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '../../assets/logo13.png'
import Input from '../../components/Input'
import Button from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminLogin() {

    const navigate = useNavigate()

    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    const onChange =(e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }
    
    const handleApi = async (e) =>{
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/api/admin/login",formData).then((res)=>{
                localStorage.setItem('accessToken', res.data.accessToken);
                navigate('/admin/dashboard')
          })
        } catch (error) {
          console.log(error)
          toast(error.response.data.message)
        }
      }

  return (
    <div>
        <ToastContainer />
        <div className=" flex flex-col items-center min-h-screen pt-20 bg-gray-50">
            <div>
                <a href="/">
                    <img src={logo} alt="" className="h-10 w-13 "/>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <Input htmlFor="email" type="email" name="email" children="Email" onChange={onChange}/>
                    <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4' onChange={onChange}/>
                    <div className="flex items-center mt-4">
                        <Button type="submit" className="bg-green-600" onClick={handleApi} >Connexion</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
