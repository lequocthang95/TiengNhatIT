import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container,Typography,Link } from '@mui/material';
import Button from '@material-ui/core/Button';
import Categories from '../../components/categories';
import headImage from '../../images/homePage/header.jpg'

const useStyles = makeStyles((theme) => ({
  header: {
    paddingTop: '30px',
    backgroundImage: `url(${headImage})`,
    minHeight: '420px',
    textAlign: 'center',
    borderRadius: '5px',
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
    <Container sx={{backgroundColor: 'hsl(205,46%,92%)'}}>
      <Grid container className={classes.header} spacing={6}>
        <Grid item >
          <Typography variant="h3" mb={3}>Tiếng Nhật trong lĩnh vực IT</Typography>
          <Typography variant="h4" color="primary" sx={{fontFamily: 'Great Vibes, cursive'}} >
            Chủ đề đa dạng! Bài viết hữu ích! Cộng đồng gắn kết! Từ vựng phong phú!
          </Typography>
          <Typography variant="h5">
            Tiếng Nhật IT là trang web chia sẽ tiếng Nhật trong lĩnh vực IT và hoàn toàn miễn phí.
            Chúng tôi hi vọng các bạn cùng tham với chúng tôi để cùng nhau xây dựng một cộng đồng gắt kết, 
            để cùng nhau ngày càng phát triển.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant={button1} color="primary"
            onMouseOver={ e => {setButton1('contained');setButton2('outlined')}}
            onMouseOut={e => {setButton1('outlined');setButton2('contained')}}>
            <Link href="/dangnhap" underline="none">Đăng Nhập</Link>
          </Button>
          <Button variant={button2} color="primary" style={{marginLeft: '20px'}}>Tham gia</Button>
        </Grid>
      </Grid>
      <Grid container style={{display: 'flex', justifyContent: 'center', height: '100px', marginTop: '20px', alignItems: 'center'}}>
        <Typography variant="h4" className={classes.title}>Chủ đề </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Categories/>  
      </Grid>
      <Grid container style={{display:'flex',alignItems: 'center',justifyContent: 'center'}}>
        <div className={classes.footer}>
          <Typography variant="h3"> Các đơn vị tài trợ cho chúng tôi! </Typography>
          <Typography variant="h6" style={{color:'rgba(0, 0, 0, 0.54)'}}>Chúng tôi rất vui mừng và trân trọng sự giúp đỡ từ các đơn vị!</Typography>
          <div className={classes.logos}></div>
          <Typography variant="h5">Bạn muốn trở thành nhà tài trợ cho Team2 IT ?</Typography>
          <Link href="/lienhe" underline="none">
            <Button variant={button1} color="primary" 
              style={{marginTop: '10px'}}
              onMouseOver={ e => {setButton1('contained')}}
              onMouseOut={e => {setButton1('outlined')}}
            >Liên hệ với chúng tôi</Button>
          </Link>
        </div> 
      </Grid>
    </Container>
  );
}

