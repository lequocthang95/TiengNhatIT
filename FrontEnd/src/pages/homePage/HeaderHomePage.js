import React, { useState } from 'react';
import { Grid, Typography, Box, Link, Button } from '@mui/material';
import ModalBasic from '../../components/modals/basicModal';
import SignIn from '../../components/SignIn';
import HeadImage from '../../images/homePage/header.jpg';

const styles = {
  minHeight: '450px',
  padding: '20px',
  borderRadius: '7px',
  backgroundImage: `url(${HeadImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 100%',
  marginTop: '10px',
};

export default function HeaderHomePage() {
  const [button1, setButton1] = React.useState('outlined');
  const [button2, setButton2] = useState('contained');
  return (
    <div>
      <Box component="div" sx={styles}>
        <Grid container>
          <Grid item sm={8} xs={12}>
            <Typography variant="h3">Tiếng Nhật trong lĩnh vực IT</Typography>
            <Box sx={{ pl: 1, pt: 2 }}>
              <Typography variant="h5" color="primary">
                Chủ đề đa dạng! Bài viết hữu ích!Cộng đồng gắn kết! Từ vựng phong phú!
              </Typography>
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Team 2 IT là trang web chia sẽ tiếng Nhật trong lĩnh vực IT.
                Chúng tôi hi vọng các bạn cùng tham với chúng tôi để cùng nhau xây dựng một cộng đồng gắt kết,
                để cùng nhau ngày càng phát triển.
              </Typography>
              <Box sx={{ mt: '30px', display: 'flex' }}>
                <ModalBasic ModalName={<Button variant={button1} color="primary"
                  onMouseOver={e => { setButton1('contained'); setButton2('outlined') }}
                  onMouseOut={e => { setButton1('outlined'); setButton2('contained') }}>
                  Đăng Nhập
                </Button>}
                  ModalContent={<SignIn />} />

                <Link href="/community" underline="none">
                  <Button sx={{ ml: '20px' }} variant={button2} color="primary">Tham gia</Button>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

