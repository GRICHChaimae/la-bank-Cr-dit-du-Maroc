import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'

export default function ClientEspace() {
  return (
    <>
        <div className="grid gap-4 place-content-center">
        <Link to='/client/sold'>
            <Button type="submit" className="bg-gray-200 text-black mx-4 mt-4">vérifier votre sold</Button>
        </Link>
        <Link to="/client/virement">
          <Button type="submit" className="bg-gray-200 text-black mx-4">faire un virement</Button>
        </Link>
        </div>
    </>
  )
}
