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
import { useState } from 'react';
import { LocationDetail } from './components';

const LocationPage = () => {
    const [selectedValue, setSelectedValue] = useState('home');
    const [locationType, setLocationType] = useState();
    const [showLocationDetail, setShowLocationDetail] = useState(false);

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
                                mt: 2,
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
                        <Box mt={2}>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    value={selectedValue}
                                    onChange={handleRadioChange}
                                >
                                    <FormControlLabel 
                                        value="home" 
                                        control={<Radio />} 
                                        sx={{ mb: 2 }}
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', width: '100%' }}>
                                                <Box mr={10}>
                                                    <Typography 
                                                        variant="subtitle2" 
                                                        sx={{ color: selectedValue === 'home' ? '#099DBD' : 'inherit' }}
                                                    >
                                                            Home
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Sampaloc V, Dasmarinas, Cavite
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
                                    <FormControlLabel 
                                        value="work" 
                                        control={<Radio />} 
                                        sx={{ mb: 2 }}
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', width: '100%' }}>
                                                <Box mr={10}>
                                                    <Typography 
                                                        variant="subtitle2" 
                                                        sx={{ color: selectedValue === 'work' ? '#099DBD' : 'inherit' }}
                                                    >
                                                        Work
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Sampaloc V, Dasmarinas, Cavite
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
                                    <FormControlLabel 
                                        value="school" 
                                        control={<Radio />} 
                                        label={
                                            <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', width: '100%' }}>
                                                <Box mr={10}>
                                                    <Typography 
                                                        variant="subtitle2" 
                                                        sx={{ color: selectedValue === 'school' ? '#099DBD' : 'inherit' }}
                                                    >
                                                        School
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary">
                                                        Sampaloc V, Dasmarinas, Cavite
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
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    </Box>
                </Slide>
                <Slide direction="left" in={showLocationDetail} mountOnEnter unmountOnExit>
                    <Box>
                        <LocationDetail closeLocationDetail={closeLocationDetail} isAdd={locationType} />
                    </Box>
                </Slide>
            </Container>
        </>
  )
}

export default LocationPage
