import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Link, Button, Grid } from '@mui/material';
import Categories from '../../components/categories';
import HeaderHomePage from './HeaderHomePage';

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '80%',
    borderTop: '1px solid rgba(0,0,0,0.5)',
    marginTop: '40px',
    padding: '50px',
    textAlign: 'center',
  },
}));
export default function HomePage() {
  const [button1, setButton1] = useState('outlined')
  const classes = useStyles();
  
  return (
    <div>
      <Container maxWidth="lg">
        <HeaderHomePage/>
        <Categories />

        <Grid container style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className={classes.footer}>
            <Typography variant="h3"> Các đơn vị tài trợ cho chúng tôi! </Typography>
            <Typography variant="h6" style={{ color: 'rgba(0, 0, 0, 0.54)' }}>Chúng tôi rất vui mừng và trân trọng sự giúp đỡ từ các đơn vị!</Typography>
            <div className={classes.logos}></div>
            <Typography variant="h5">Bạn muốn trở thành nhà tài trợ cho Team2 IT ?</Typography>
            <Link href="/contacts" underline="none">
              <Button variant={button1} color="primary"
                style={{ marginTop: '10px' }}
                onMouseOver={e => { setButton1('contained') }}
                onMouseOut={e => { setButton1('outlined') }}
              >Liên hệ với chúng tôi</Button>
            </Link>
          </div>
        </Grid>
      </Container>
    </div>
  );
}