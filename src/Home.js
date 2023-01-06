import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate();

  return (
    <div>
        Home <a href='javascript:void(0)' onClick={ ()=> navigate('/login')}> Go to Login Page </a>
    </div>
  )
}
