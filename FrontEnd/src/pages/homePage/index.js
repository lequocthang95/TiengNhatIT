import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container,Typography,Button,CardMedia,Link, } from '@material-ui/core';
import Categories from '../../components/categories';

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: '30px',
    backgroundColor: '#f5f5f5',
    minHeight: '420px',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '7px',
    lineHeight: 2,
  },
  title: {
    marginBottom: '20px'
  }, 
  list: {
    padding: '15px',
  },
  solgan:{
    fontFamily: 'Great Vibes, cursive',
  },
  footer: {
    width: '80%',  
    borderTop:'1px solid rgba(0,0,0,0.5)',
    marginTop: '40px',
    padding: '50px',
    textAlign: 'center',
  },
  logos:{
    minHeight: '120px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
}));

export default function HomePage() {
  const [button1,setButton1] =useState('outlined')
  const [button2,setButton2] =useState('contained')
  const classes = useStyles();

  return (
    <Container>
      <Grid container className={classes.header} spacing={3}>
        <Grid item md={7} xs={12} style={{padding: '20px',}}>
          <Typography variant="h3" className={classes.title}>Tiếng Nhật trong lĩnh vực IT</Typography>
          <Typography variant="h4" className={classes.solgan} color="primary" >
            Chủ đề đa dạng! Bài viết hữu ích!
          </Typography>
          <Typography variant="h4" className={classes.solgan} color="primary" >
            Cộng đồng gắn kết! Từ vựng phong phú!
          </Typography>
          <Typography variant="h5" style={{marginTop: '10px'}}>
            Team 2 IT là trang web chia sẽ tiếng Nhật trong lĩnh vực IT và hoàn toàn miễn phí.
            Chúng tôi hi vọng các bạn cùng tham với chúng tôi để cùng nhau xây dựng một cộng đồng gắt kết, 
            để cùng nhau ngày càng phát triển.
          </Typography>
          <div style={{marginTop: '30px',}}>
            <Button variant={button1} color="primary"
              onMouseOver={ e => {setButton1('contained');setButton2('outlined')}}
              onMouseOut={e => {setButton1('outlined');setButton2('contained')}}>
              <Link href="/dangnhap" underline="none">Đăng Nhập</Link>
            </Button>
            <Button variant={button2} color="primary" style={{marginLeft: '20px'}}>Tham gia</Button>
          </div>
        </Grid>
        <Grid item md={5} xs={12}>  
          <CardMedia
            component="img"
            alt="head homePage"
            image="/static/images/homePage/header.jpg"
          />
        </Grid>
      </Grid>
      <Grid container style={{display: 'flex', justifyContent: 'center', height: '100px', marginTop: '20px', alignItems: 'center'}}>
        <Typography variant="h4" className={classes.title}>Chủ đề </Typography>
      </Grid>
      <Grid container style={{backgroundColor: '#f5f5f5', flexWrap:'wrap'}} spacing={2}>
        <Categories/>  
      </Grid>
      <Grid container style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <div className={classes.footer}>
          <Typography variant="h3"> Các đơn vị tài trợ cho chúng tôi! </Typography>
          <Typography variant="h6" style={{color:'rgba(0, 0, 0, 0.54)'}}>Chúng tôi rất vui mừng và trân trọng sự giúp đỡ từ các đơn vị!</Typography>
          <div className={classes.logos}></div>
          <Typography variant="h5">Bạn muốn trở thành nhà tài trợ cho Team2 IT ?</Typography>
          <Button variant={button1} color="primary" 
            style={{marginTop: '10px'}}
            onMouseOver={ e => {setButton1('contained')}}
            onMouseOut={e => {setButton1('outlined')}}
          >Liên hệ với chúng tôi</Button>
        </div> 
      </Grid>
    </Container>
  );
}

