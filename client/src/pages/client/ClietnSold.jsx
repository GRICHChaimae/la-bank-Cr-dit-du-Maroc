import React from 'react'
import Button from '../../components/Button';
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function ClietnSold() {
  const sold = localStorage.getItem('userSold');
  return (
    <>
    <div className="m-12">
      <Link to="/client/espace">
        <AiOutlineArrowLeft />
      </Link>
    </div>
    <div className="grid gap-4 place-content-center">
      <div className="mx-6 mt-12">Votre Solde</div>
      <Button type="submit" className="bg-gray-200 text-black mx-4">`${sold} DH`</Button>
    </div>
    </>
  )
}
