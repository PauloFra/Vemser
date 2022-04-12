import { useEffect } from "react"
import { isAuth } from '../../store/actions/AuthActions'
import { useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
      if(!isAuth()){
        navigate('/login')
      }
    },[])
    
    return (
    <div>Home</div>
  )
}

export default Home