// import { Link } from "react-router-dom"
import { Box, Container, Typography, Link } from "@mui/material"

export const Footer = () => {
    return(
        <>
        <Box sx={{ background: '#090d1d', pt: 10, pb: 10 }}>
            <Container>
                <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    flexDirection: {xs: 'column', md: 'row'}
                }}>
                    <Typography 
                        variant="h3"
                        sx={{ flexGrow: 1, color: '#2563EB', fontWeight:'700' }}
                    >
                        Hydro<span style={{ color:'#60A5FA' }}>Maze</span>
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: '1em',
                        color: '#cfcfcf',
                        flexDirection: {xs: 'column', md: 'row'},
                        alignItems: 'center',
                        mt: {xs: 2, md: 0}
                    }}>
                        <Link color='inherit' underline="hover" sx={{ cursor: 'pointer' }}>About Us</Link>
                        <Link color='inherit' underline="hover" sx={{ cursor: 'pointer' }}>Contact Us</Link>
                        <Link color='inherit' underline="hover" sx={{ cursor: 'pointer' }}>Privacy Policy</Link>
                        <Link color='inherit' underline="hover" sx={{ cursor: 'pointer' }}>Terms of Service</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
        <Box>
            <Container>
                <Typography textAlign="center" sx={{ p: .5, fontSize: '.8rem', color: '#616060' }}>©2023 HydroMaze. All rights reserved.</Typography>
            </Container>
        </Box>
        </>
    )
}