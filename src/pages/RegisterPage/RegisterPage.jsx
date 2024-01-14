import { useAuth0 } from "@auth0/auth0-react"
import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ReactMapGL, { Marker } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const RegisterPage = () => {
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
        <Container className="register">
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3}}>
                <Typography 
                    variant="h3" 
                    sx={{ color: '#2563EB', fontWeight:'700' }}
                >
                    Hydro<span style={{ color:'#60A5FA' }}>Maze</span>
                </Typography>
            </Box>
            <Container>
                <Box sx={{ width: {md: '50%', xs: '100%'} }}>
                    <Typography variant="h3" textAlign="left" mt={2} color="#5B7C8E">Complete your profile</Typography>
                    <Typography variant="body2">Hello there! 🌟 Elevate your experience with us by completing your profile. It takes just a few moments, and the benefits are immense. <br /> <br /></Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' },
                        gap: '2em'

                    }}>
                        <Box sx={{ width: '100%' }}>
                            <Typography variant="body2">Let&apos;s make your journey with us personalized and tailored to your preferences!</Typography>
                            <TextField 
                                required
                                type="text" 
                                label="Name" 
                                size="small" 
                                sx={{ width: '100%', mt: 2 }} 
                                onChange={nameHandler}
                            />
                            <TextField 
                                required
                                type="text" 
                                label="Phone Number" 
                                size="small" 
                                sx={{ width: '100%', mt: 2 }} 
                                onChange={phoneHandler}
                            />
                            <TextField 
                                required
                                type="text" 
                                label="Address" 
                                size="small" 
                                sx={{ width: '100%', mt: 2 }} 
                                onChange={addressHandler}
                            />
                            <Box sx={{ float: 'right', mt: 2 }}>
                                <Button 
                                    type="submit" 
                                    variant="outlined"
                                    sx={{ mr: 1.5 }}
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    type="submit" 
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Box>
                        <div style={{ width: '100%', height: "50vh", marginTop: '.5em' }}>
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
                                style={{ border: '3px solid #5B7C8E', borderRadius: '8px' }}
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
                    </Box>
                </form>
            </Container>
        </Container>
    )
}

export default RegisterPage;