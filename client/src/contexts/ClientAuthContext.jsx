import React, { useState, createContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

export const ClientAuthContext = createContext()

export default function ClientAuthProvider({ children }) {

    const navigate = useNavigate()

    const [reserror, setReserror] = useState(null)

    const [formData, setFormData] = useState({
        fname:"",
        lname:"",
        CIN:"",
        password:"",
        email:"",
    })

    const loginClient = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:5000/api/users/login",formData).then((res)=>{
              localStorage.setItem('accessToken', JSON.stringify(res.data.accessToken));
                localStorage.setItem('userSold', JSON.stringify(res.data.user_sold));
                localStorage.setItem('user_id', JSON.stringify(res.data.user_id));
                navigate('/client/espace')
          })
        } catch (error) {
          console.log(error)
          setReserror(error.response.data.message)
        }
    }

  return (
    <div>
        <ClientAuthContext.Provider value={[formData, setFormData, loginClient, reserror]}>
            {children}
        </ClientAuthContext.Provider>
    </div>
  )
}
