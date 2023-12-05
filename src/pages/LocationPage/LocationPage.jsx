import {
    Typography,
    Container,
    FormControl,
    RadioGroup,
    Radio,
    FormControlLabel,
    Box,
    IconButton,
    Button,
    Slide,
} from '@mui/material';
import {
    EditTwoTone as EditTwoToneIcon,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { LocationDetail } from './components';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const LocationPage = () => {
    const [selectedValue, setSelectedValue] = useState('home');
    const [locationType, setLocationType] = useState();
    const [showLocationDetail, setShowLocationDetail] = useState(false);
    const [locationList, setLocationList] = useState()
    const {user} = useAuth0()
    const [loading, setLoading] = useState(true); 

    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    };

    const openLocationDetail = (type) => {
        setLocationType(type);
        setShowLocationDetail(true);
    }

    const closeLocationDetail = () => {
        setShowLocationDetail(false);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user && user.email) {
                    const response = await axios.get(`http://localhost:5174/api/users/${user.email}`);  
                    setLocationList(response.data[0].location)
                    setLoading(false); 
                } else {
                    console.log('User or user.email is undefined or null.');
                    setLoading(false); 
                }
            } catch (error) {
                console.log('Error fetching data:', error);
                setLoading(false);
            }
        };
        fetchData();
    }, [user]);

    useEffect(()=>{
        console.log('location list \n',locationList)
    },[locationList])


    return (
        <>
            <Container>
                <Slide direction="right" in={!showLocationDetail} mountOnEnter unmountOnExit appear={false}>
                    <Box>
                        <Box 
                            sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                mt: 9,
                                mb: 2,
                            }}
                        >
                            <Typography>Select your Location</Typography>
                            <Button 
                                variant="text"
                                onClick={() => openLocationDetail(true)}
                            >
                                Add New
                            </Button>
                        </Box>
                        <Box mt={3}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={selectedValue}
                                    onChange={handleRadioChange}
                                >
                                    {
                                    locationList &&
                                    locationList.map((location, index)=>{
                                        return(
                                            <FormControlLabel
                                                key={index} 
                                                value={location.locName} 
                                                control={<Radio />} 
                                                sx={{ mb: 2 }}
                                                label={ 
                                                    <Box 
                                                        sx={{ 
                                                            display: 'flex', 
                                                            alignItems: 'start', 
                                                            justifyContent: 'space-between', 
                                                            width: '100%' 
                                                            }}
                                                    >
                                                        <Box mr={10}>
                                                            <Typography 
                                                                variant="subtitle2" 
                                                                sx={{ color: selectedValue === 'home' ? '#099DBD' : 'inherit' }}
                                                            >
                                                                {location.locName}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary">
                                                                {location.address}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <IconButton 
                                                                size='small'
                                                                onClick={() => openLocationDetail(false)}
                                                            >
                                                                <EditTwoToneIcon fontSize='inherit' />
                                                            </IconButton>
                                                        </Box>
                                                    </Box>
                                                }
                                            />
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                            <Button 
                                size='small'
                                variant='contained'
                                sx={{ ml: 1 }}
                            >
                                Select
                            </Button>
                        </Box>
                    </Box>
                </Slide>
                <Slide direction="left" in={showLocationDetail} mountOnEnter unmountOnExit>
                    <Box sx={{ mt: 10 }}>
                        <LocationDetail 
                            closeLocationDetail={closeLocationDetail} 
                            isAdd={locationType}
                        />
                    </Box>
                </Slide>
            </Container>
        </>
  )
}

export default LocationPage
