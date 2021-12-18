import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentTwoToneIcon from '@mui/icons-material/AddCommentTwoTone';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import Rating from '@mui/material/Rating';
function BasicRating() {
    const [value, setValue] = React.useState(1);
  
    return (
      <Box
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    );
  }

export default function Vocabulary() {
    return (
        <Container sx={{minHeight: '584px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid container>
                <Grid item sm={8}>
                    <Box sx={{border: '1px solid black', padding: '20px'}}>
                        <Typography>Từ Vựng</Typography>
                        <Typography>プログラミング言語</Typography>
                        <Typography>Ý nghĩa chuyên ngành</Typography>
                        <Typography>Ngôn ngữ lập trình (programming language) là dạng ngôn ngữ được chuẩn hóa 
                        theo một hệ thống các quy tắc riêng, sao cho qua đó người lập trình có thể mô tả 
                        các chương trình làm việc dành cho thiết bị điện tử mà cả con người và các thiết bị đó đều hiểu được.</Typography>
                        <Typography>Ví dụ liên quan</Typography>
                        <Typography>プログラミング言語（プログラミングげんご、英: programming language）とは、プログラムを記述するための人工言語[1]。
                        コンピュータプログラムを書くために考案された、正確に定義された記号と規則のしくみ[2]。以前はしばしばプログラム言語と表記された.</Typography>
                    </Box>
                </Grid>
                <Grid item sm={4}>
                    <Box sx={{border: '1px solid black', padding: '20px'}}>
                        <Typography>Đánh giá bản dịch</Typography>
                            <BasicRating/>
                        <Typography>Thao tác</Typography>
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <Fab color="primary" aria-label="add">
                                <VolumeUpOutlinedIcon />
                            </Fab>
                            <Fab color="secondary" aria-label="edit">
                                <AddCommentTwoToneIcon />
                            </Fab>
                            <Fab color="primary" aria-label="add">
                                <PlaylistAddIcon />
                            </Fab>
                            <Fab disabled aria-label="like">
                                <FavoriteIcon />
                            </Fab>
                            <Fab color="red" aria-label="edit">
                                <ShareOutlinedIcon />
                            </Fab>
                        </Box>
                        <Box sx={{boderTop:'1px solid red' }}>
                        text
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>   
    )
}
