import React, { useState, useEffect , createContext} from 'react'
import axios from 'axios'

export const ClientsContext = createContext()

export default function ClientsProvider({ children }) {

    const [clients, setClients] = useState([])

    const getClients = () => {
        try {
            axios.get("http://localhost:5000/api/dashboard/clients", {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Accept'       : 'application/json'
                   }
            }).then((res) => {
                console.log(res.data)
                setClients(res.data)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getClients()
    }, [clients])

  return (
    <ClientsContext.Provider value={clients}>
        {children}
    </ClientsContext.Provider>
  )
}
