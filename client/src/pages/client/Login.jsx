import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '../../assets/logo13.png'
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ClientAuthContext } from '../../contexts/ClientAuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

    const [formData, setFormData, loginClient, reserror] = useContext(ClientAuthContext)

    if(reserror === 'Invalid credentials') {
        toast(reserror)
    }

    const onChange =(e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
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
                    <Input htmlFor="email" type="text" name="email" children="Email" className='mt-4' onChange={onChange}/>
                    <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4' onChange={onChange}/>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="/devenirclient"
                        >
                            Vous n'avez pas un compt? Crée un
                        </a>
                        <Button type="submit" className="bg-red-600 mx-4" onClick={loginClient}>Connexion</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
