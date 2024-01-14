import {
    Container,
    Typography,
    Button,
    Box,
    Autocomplete,
    TextField,
} from '@mui/material';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { FaLocationDot } from "react-icons/fa6";
import "mapbox-gl/dist/mapbox-gl.css";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router';

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const LocationDetail = ({ closeLocationDetail, isAdd, location }) => {
    const [locName, setLocName] = useState(!isAdd ? location.locName : "")
    const [address, setAddress] = useState(!isAdd ? location.address : "")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [viewport, setViewport] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 15,
      });
    const {user} = useAuth0()
    const navigate = useNavigate()

    const sampleLocations = [
        { city: 'Manila', state: 'Metro Manila' },
        { city: 'Cebu City', state: 'Cebu' },
        { city: 'Davao City', state: 'Davao del Sur' },
        { city: 'Quezon City', state: 'Metro Manila' },
        { city: 'Baguio City', state: 'Benguet' },
        { city: 'Cagayan de Oro', state: 'Misamis Oriental' },
        { city: 'Iloilo City', state: 'Iloilo' },
      ];

      const locNameChange = (e) => {
        setLocName(e.target.value)
      }

      const addressChange = (e) => {
        setAddress(e.target.value)
      }

      const handleSubmit = async () => {
        if(isAdd){
            const data = {
                userName: user.email,
                locName: locName,
                address: address,
                latitude: latitude,
                longitude: longitude
            }
            const postData = await axios.post('http://localhost:5174/api/users/loc/add', data)
            if(postData.data){
                navigate("/client-dashboard")
            }
        }else{
            const data = {
                username: user.email,
                prevLocName: location.locName,
                newLocName: locName,
                address: address,
                latitude: latitude,
                longitude: longitude
            }
            axios.post('http://localhost:5174/api/users/loc/edit',data)
            .then(res => {
                console.log(res.data)
                navigate(-1)
            })
        }
    }

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

      useEffect(()=>{
        console.log(address)
      },[address])

  return (
    <Container>
        <Typography mt={2} mb={3}>
            {isAdd===true ? 'Add New ' : 'Edit '} Location
        </Typography>

        <TextField 
            id="name" 
            label="Name" 
            variant="outlined" 
            size="small"
            sx={{ mb: 2, width: '100%' }}
            onChange={locNameChange}
            defaultValue={isAdd ? "" : location.locName}
        />

        <Autocomplete
            size="small"
            id="location"
            freeSolo
            options={sampleLocations}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} label="Enter your address" onChange={addressChange}/>}
            renderOption={(props, option) => (
            <li {...props}>
                <div>{option.city}</div>
                <div style={{ fontSize: 12, color: '#777' }}>{option.state}</div>
            </li>
            )}
        />
        <div style={{ width: "100%", height: "400px", marginTop:"30px"}}>
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
        <Box sx={{ mt: 5, float: 'right'  }}>
            <Button 
                size='small'
                onClick={closeLocationDetail}
            >
                Cancel
            </Button>
            <Button 
                size='small'
                variant='contained'
                onClick={handleSubmit}
                sx={{ ml: 1 }}
            >
                {isAdd ? "Add" : "Save"}
            </Button>
        </Box>
       
    </Container>
  )
}

LocationDetail.propTypes = {
    closeLocationDetail: PropTypes.func.isRequired,
    isAdd: PropTypes.bool.isRequired,
}

export default LocationDetail;
