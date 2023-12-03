import {
    Container,
    Typography,
    Button,
} from '@mui/material';
import PropTypes from 'prop-types';

const LocationDetail = ({ closeLocationDetail }) => {
  return (
    <Container>
        <Typography>
            Eyyyyy
        </Typography>
        <Button onClick={closeLocationDetail}>
            Back
        </Button>
    </Container>
  )
}

LocationDetail.propTypes = {
    closeLocationDetail: PropTypes.func.isRequired,
}

export default LocationDetail;
