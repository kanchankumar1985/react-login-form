import React from 'react'
import { useLocation } from 'react-router-dom'


export default function LoginFormSucess() {
    const {state} = useLocation();
  return (
    <div>LoginFormSucess {state.userName} {state.password}</div>
  )
}
