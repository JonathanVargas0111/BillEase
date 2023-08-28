import { useEffect } from "react"
import { useNavigate } from "react-router-dom";



const MainTemplate = () => {

    const token = true;
    const navigate = useNavigate()

    useEffect( ()=>{
        if(!token){
            navigate('/inicio')
        }
    },[])

  return (
    <div>MainTemplate</div>
  )
}

export default MainTemplate