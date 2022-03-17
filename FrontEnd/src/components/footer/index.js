import React from 'react';
import { Container, Box,Typography,AppBar } from '@mui/material';
export default function Footer() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f5f5f5'}}>
      <Container maxWidth="lg">
        <Box component="div" color="darksalmon" sx={{ minHeight: '80px',fontSize: '5rem',paddingTop:'20px'}}>
          <Typography textAlign="center">© Copyright 2022-www.TiengNhatIT.com-Tiếng Nhật IT</Typography>
        </Box>       
      </Container>
    </AppBar>
   
  );
}

