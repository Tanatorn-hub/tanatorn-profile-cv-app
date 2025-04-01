import { AppBar, Container, Toolbar, Box, Typography, Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from '../assets/pic1.jpg'

function HomeUI() {
  return (
    <>
    <Container maxWidth="xl" sx={{bgcolor:'#121212'}}>

      {/* Nav bar */}
      <AppBar sx={{backgroundColor:'#121212'}} position='static'>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1, fontWeight:'bold'}}>
            Tanatorn Phloenmalai
          </Typography>
          <Typography component={Link} to='/work' sx={{textDecoration:'none', color:'white', mr:'10px'}}>
            Work
          </Typography>
          <Typography component={Link} to='/About' sx={{textDecoration:'none', color:'white', mr:'10px'}}>
            About
          </Typography>
          <Typography component={Link} to='/Contact' sx={{textDecoration:'none', color:'white', mr:'10px'}}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Profile */}
      <Box id={'profile'} sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <Typography variant='h2' sx={{color:'white', mt:'50px', ml:'50px',textAlign:'left', fontWeight:'normal', fontSize:'100px'}}>
          HI, I AM
        </Typography><br/>
        
        <Avatar 
        src={pic1} 
        variant='rounded' 
        sx={{width:'400px', height:'400px',mt:'50px'}}/>
        

      </Box>
      

    </Container>

    </>
  )
}

export default HomeUI