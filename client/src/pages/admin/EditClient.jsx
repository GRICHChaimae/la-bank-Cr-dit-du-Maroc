import React, {useEffect, useState}  from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import axios from 'axios'

export default function EditClient() {
    const location = useLocation()
    const id = location.search.split('?')[1]
    const navigate = useNavigate()

    const [result, setResult] = useState({
        fname: '',
        lname: '',
        CIN: '',
    })

    const handleChange = (e)=>{
        setResult((previousState)=>({
            ...previousState,
            [e.target.name] : e.target.value,
        }))
    }

    const getClient = async () => {
        try {
            await axios.get(`http://localhost:5000/api/dashboard/oneClient/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Accept'       : 'application/json'
                }
            }).then((res) => {
                console.log(res.data)
                setResult(res.data)
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() =>{
        getClient()
    }, [])

    const updateClient = async event => {
        event.preventDefault();
        try {
            await fetch(`http://localhost:5000/api/dashboard/editClient/${id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Accept'       : 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fname: result.fname,
                    lname: result.lname,
                    CIN: result.CIN,
                    email: result.email
            })
            })
                .then(response => location.reload())
                .catch(err => console.log(err));
                navigate('/admin/dashboard')
    
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
    <div className=" flex flex-col items-center min-h-screen pt-8 bg-gray-50">
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
        <form>
            <Input htmlFor="fname" type="text" name="fname" children="Nom" value={result.fname} onChange={handleChange}/>
            <Input htmlFor="lname" type="text" name="lname" children="Prénom" className='mt-4' value={result.lname} onChange={handleChange}/>
            <Input htmlFor="CIN" type="text" name="CIN" children="CIN" className='mt-4' value={result.CIN} onChange={handleChange}/>
            <Input htmlFor="email" type="email" name="email" children="Email" className='mt-4' value={result.email} onChange={handleChange}/>
            <div className=" justify-start mt-4">
                <Button type="submit" className="bg-cyan-600" onClick={updateClient}>Edité le client</Button>
            </div>
        </form>
        </div>
    </div>
    </>
  )
}
