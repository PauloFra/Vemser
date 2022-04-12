import React from 'react'
import { useEffect } from "react"
import { isAuth } from '../../store/actions/AuthActions'
import { useNavigate } from 'react-router-dom'
function Profile() {
  const navigate = useNavigate()
  useEffect(()=>{
    if(!isAuth()){
      navigate('/login')
    }
  },[])
  return (
    <div>Profile</div>
  )
}

export default Profile