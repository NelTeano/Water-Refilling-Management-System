import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

export const Index = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const getUser = async () => {
            const user = await axios.get('http://localhost:5174/login/checker')
            if(!user.data.isAuthenticated){
                navigate('/admin')
            }
        }
        getUser()
    },[])

    return(
        <div>
            <h1>Test</h1>
        </div>
    )
}