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

const token = import.meta.env.VITE_MAPBOX_TOKEN;

const LocationDetail = ({ closeLocationDetail, isAdd }) => {
    const [locName, setLocName] = useState("")
    const [address, setAddress] = useState("")
    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [viewport, setViewport] = useState({
        longitude: 0,
        latitude: 0,
        zoom: 15,
      });

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

      const handleSubmit = () => {
        const data = {
            userName: 'joshuamagwili@gmail.com',
            locName: locName,
            address: address,
            latitude: latitude,
            longitude: longitude
        }
        axios.post('http://localhost:5174/api/users/loc/add', data)
        .then((res)=>console.log(res))
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
        <div style={{ width: "50vw", height: "400px" }}>
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
                Add
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
