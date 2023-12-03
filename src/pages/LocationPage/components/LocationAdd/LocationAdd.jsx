import {
    Container,
    Typography,
    Button,
    Box,
    Autocomplete,
    TextField,
} from '@mui/material';
import PropTypes from 'prop-types';

const LocationAdd = ({ closeLocationDetail }) => {
    const sampleLocations = [
        { city: 'Manila', state: 'Metro Manila' },
        { city: 'Cebu City', state: 'Cebu' },
        { city: 'Davao City', state: 'Davao del Sur' },
        { city: 'Quezon City', state: 'Metro Manila' },
        { city: 'Baguio City', state: 'Benguet' },
        { city: 'Cagayan de Oro', state: 'Misamis Oriental' },
        { city: 'Iloilo City', state: 'Iloilo' },
      ];

  return (
    <Container>
        <Typography mt={2} mb={3}>
            Add New Location
        </Typography>

        <TextField 
            id="name" 
            label="Name" 
            variant="outlined" 
            size="small"
            sx={{ mb: 2, width: '100%' }}
        />

        <Autocomplete
            size="small"
            id="location"
            freeSolo
            options={sampleLocations}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} label="Enter your Location" />}
            renderOption={(props, option) => (
            <li {...props}>
                <div>{option.city}</div>
                <div style={{ fontSize: 12, color: '#777' }}>{option.state}</div>
            </li>
            )}
        />

        <Box sx={{ mt: 2, float: 'right'  }}>
            <Button 
                size='small'
                onClick={closeLocationDetail}
            >
                Cancel
            </Button>
            <Button 
                size='small'
                variant='contained'
                onClick={closeLocationDetail}
                sx={{ ml: 1 }}
            >
                Add
            </Button>
        </Box>
    </Container>
  )
}

LocationAdd.propTypes = {
    closeLocationDetail: PropTypes.func.isRequired,
}

export default LocationAdd;
