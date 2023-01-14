import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo13.png'
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Login() {
  return (
    <div>
        <div className=" flex flex-col items-center min-h-screen pt-20 bg-gray-50">
            <div>
                <a href="/">
                    <img src={logo} alt="" className="h-10 w-13 "/>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <Input htmlFor="email" type="email" name="email" children="Email"/>
                    <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4'/>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="/devenirclient"
                        >
                            Vous n'avez pas un compt? Crée un
                        </a>
                        <Button type="submit" className="bg-red-600 mx-4">Connexion</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
