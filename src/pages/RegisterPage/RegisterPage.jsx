import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";
import "mapbox-gl/dist/mapbox-gl.css";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

export const RegisterPage = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [viewport, setViewport] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 15,
      });
    
    const {user} = useAuth0()
    const navigate = useNavigate()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
            setViewport({
              ...viewport,
              longitude: position.coords.longitude,
              latitude: position.coords.latitude,
            });
          },
          (error) => console.log(error),
          { enableHighAccuracy: true }
        );
      }, []);


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
        console.log(data)    
        
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
                
                <div style={{ width: "50vw", height: "50vh" }}>
                    <ReactMapGL
                        {...viewport}
                        mapboxAccessToken={token}
                        width="100%"
                        height="100%"
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        interactive={true}
                        onDrag={(e) => {
                            setViewport({
                            longitude: e.viewState.longitude,
                            latitude: e.viewState.latitude,
                            });
                        }}
                    >
                        <Marker
                            latitude={latitude}
                            longitude={longitude}
                            offsetLeft={-3.5 * viewport.zoom}
                            offsetRight={-7 * viewport.zoom}
                            draggable={true}
                            onDragEnd={(e) => {
                            setLatitude(e.lngLat.lat);
                            setLongitude(e.lngLat.lng);
                            console.log(e.lngLat.lat);
                            console.log(e.lngLat.lng);
                            }}
                        >
                            <div>
                                <FaLocationDot
                                    style={{
                                    height: "40px",
                                    width: "auto",
                                    color: "red",
                                    }}
                                />
                            </div>
                        </Marker>
                    </ReactMapGL>
                </div>
            <input type="submit" />
            </form>
        </div>
    )
}