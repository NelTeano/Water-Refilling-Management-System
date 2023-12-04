import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const RegisterPage = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const {user} = useAuth0()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            userName: user.email,
            userPhone: phone,
            userPicture: user.picture,
            address: address,
            latitude: latitude,
            longitude: longitude
        }    
        
        axios.post('http://localhost:5174/api/users/new',data)
        .then((res)=>{
            if(res.status === 200){
                navigate('/client-dashboard')
            }
        })
        .catch((err)=>console.log(err))
    }

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const phoneHandler = (e) => {
        setPhone(e.target.value)
    }

    const addressHandler = (e) => {
        setAddress(e.target.value)
    }
    
    return(
        <div className="register">
            <h3>Complete your profile</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" onChange={nameHandler}/><br />
                <input type="text" placeholder="Phone Number" onChange={phoneHandler}/><br />
                <input type="text" placeholder="Address" onChange={addressHandler}/><br />
                <input type="submit" />
            </form>
        </div>
    )
}