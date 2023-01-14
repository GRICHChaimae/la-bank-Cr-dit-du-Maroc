import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo13.png'
import Input from '../../components/Input'
import Button from '../../components/Button';

export default function DevenirClient() {
  return (
    <div>
        <div className=" flex flex-col items-center min-h-screen pt-8 bg-gray-50">
            <div>
                <a href="/">
                    <img src={logo} alt="" className="h-10 w-13 "/>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <Input htmlFor="fname" type="text" name="fname" children="Nom"/>
                    <Input htmlFor="lname" type="text" name="lname" children="Prénom" className='mt-4'/>
                    <Input htmlFor="CIN" type="text" name="CIN" children="CIN" className='mt-4'/>
                    <Input htmlFor="email" type="text" name="email" children="Email" className='mt-4'/>
                    <Input htmlFor="password" type="password" name="password" children="Mots de passe" className='mt-4  '/>
                    <div className="flex items-center justify-end mt-4">
                        <a
                            className="text-sm text-gray-600 underline hover:text-gray-900"
                            href="/client/login"
                        >
                            Avez-vous un compt? Accéder à votre espace
                        </a>
                        <Button type="submit" className="bg-cyan-600 mx-4">Enregistrer</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
