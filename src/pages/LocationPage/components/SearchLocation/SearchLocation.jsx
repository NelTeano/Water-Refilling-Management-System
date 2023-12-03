import { 
  Autocomplete,
  TextField,
  Box,
} from "@mui/material"

const SearchLocation = () => {
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
    <Box sx={{ width: '100%' }}>
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
    </Box>
  )
}

export default SearchLocation;
