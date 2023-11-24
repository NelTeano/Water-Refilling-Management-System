import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router"

export const Index = () => {
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        const getUser = async () => {
            try {
              const user = await axios.get('http://localhost:5174/login/checker');
              if(!user.data.isAuthenticated){
                navigate('/admin')
              }
            } catch (err) {
              console.error('Error:', err);
              navigate('/admin')
              // Handle error (e.g., redirect or display an error message)
            }
          };
          
          getUser();
          
    },[])

    return(
        <div>
            <h1>Test</h1>
        </div>
    )
}