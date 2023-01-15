import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ClientVirement() {

    const [formData, setFormData] = useState({
        account_number:"",
        virement:0,
    })

    const [alert, setAlert] = useState()

    const onChange =(e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const accessToken = localStorage.getItem('accessToken').replace(/['"]+/g, '')

    const virement = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/api/client/sold_virement", formData, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Accept'       : 'application/json'
                }
            }).then((res) => {toast(res.data.message) 
                console.log(res)})
        } catch (error) {
            console.log(error)
            toast(error.response.data.message)
        }
    }

  return (
    <>
        <ToastContainer />
        <div className=" flex flex-col items-center min-h-screen pt-20 bg-gray-50">
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                    <Input htmlFor="account_number" type="number" name="account_number" children="Numéro de compt" className='mt-4' onChange={onChange}/>
                    <Input htmlFor="virement" type="number" name="virement" children="virement" className='mt-4' onChange={onChange}/>
                        <Button type="submit" className="bg-green-600 mt-4" onClick={virement}>Submit</Button>
                </form>
            </div>
        </div>
    </>
  )
}
