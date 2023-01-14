import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { ClientsContext } from '../contexts/ClientsContext'

export default function TableRow() {

    const clients = useContext(ClientsContext)

    const deleteTrip = async (id) => {
        try {         
            await axios.delete(`http://localhost:5000/api/dashboard/deleteClient/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Accept'       : 'application/json'
                }
            }).then((res) => {
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log('tttttttt')
    }, [clients])

  return (
    <>
    {clients.map(client => (
        <tr key={client.id}>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {client.fname}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {client.lname}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {client.email}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {client.account_number}
            </td>
            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                {client.sold}
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                <a
                    className="text-green-500 hover:text-green-700"
                    href="#"
                >
                    <Link
                    to={{
                        pathname: '/admin/editclient',
                        search: `${client._id}`,
                    }}
                    >
                        Edit
                    </Link>
                    
                </a>
            </td>
            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap" onClick={() => deleteTrip(client._id)}>
                <a
                    className="text-red-500 hover:text-red-700"
                    href="#"
                >
                    Delete
                </a>
            </td>
        </tr>
    ))}
    </>
  )
}
