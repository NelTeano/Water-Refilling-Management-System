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
} from '@mui/material';
import {
    EditTwoTone as EditTwoToneIcon,
} from '@mui/icons-material';
import { useState } from 'react';

const LocationPage = () => {
    const [selectedValue, setSelectedValue] = useState('home');

    const handleRadioChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <>
            <Container>
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
                                            <IconButton size='small'>
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
                                            <IconButton size='small'>
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
                                            <IconButton size='small'>
                                                <EditTwoToneIcon fontSize='inherit' />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                }
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Container>
        </>
  )
}

export default LocationPage
