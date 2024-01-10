import { Link } from "react-router-dom"

import {
    Box,
    Typography,
} from '@mui/material';


export const Footer = () => {
    return(
        <Box
            sx={{
                display: "flex",
                justifyContent: {xs: "center" , md: 'space-between'},
                alignItems: "center",
                gap: {xs: '50px'},
                position: "relative",
                height: "300px",
                width: "100%",
                backgroundColor: "#099DBD",
                flexWrap: 'wrap',
            }}
        >
            <Box 
                sx={{display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: "column", gap: "30px", ml: {xs: 0, md: 10}}}
            >
                <Box>
                    <Typography variant="h5" sx={{flexGrow: 1, fontSize: "40px",color: '#fff', fontWeight:'700'}} mb={2}>HydroMaze</Typography>
                    
                </Box>
                <Box sx={{display: {xs: 'none', md: 'block'}}}>
                    <Typography mb={3} sx={{color: '#fff'}}>Join and Become our customer</Typography>
                    <Typography sx={{color: '#fff'}}>Be one of us drinking healthy water everyday<br></br> makes our family and love ones safe.</Typography>
                </Box>
            </Box>
            <Box sx={{ml: {xs: 0, md: 10}}}>
                <Box sx={{display: "flex",alignItems: 'center', gap: '70px', mr: {xs: 0, md: 10}}}>
                    <Box>
                        <Link style={{textDecoration: "none"}} to={"/#"}><Typography sx={{color: '#fff', fontWeight:'500'}}>About Us</Typography></Link>
                        <Link style={{textDecoration: "none"}} to={"/#"}><Typography sx={{color: '#fff', fontWeight:'500'}} mt={6}>Contact Us</Typography></Link>
                    </Box>
                    <Box >
                        <Link style={{textDecoration: "none"}} to={"/#"}><Typography sx={{color: '#fff', fontWeight:'500'}}>Privacy Policy</Typography></Link>
                        <Link style={{textDecoration: "none"}} to={"/#"}><Typography mt={6} sx={{color: '#fff', fontWeight:'500'}}>Terms of Service</Typography></Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}