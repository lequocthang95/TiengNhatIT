import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Category from './Category';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { showCategories, searchCategoriesChange } from '../../redux/actions'
import { searchCategoriesSelector,listCategoriesSelector } from '../../redux/selector';

const test = [
  {
    "_id": "6136223805530ee4f7690103",
    "email": "thang5@gmail.com",
    "name": "thang1",
    "password": "sdsa"
  },
  {
    "_id": "613625f105530ee4f7690110",
    "email": "thang5@gmail.com",
    "name": "thang2",
    "password": "sdsa"
  },
  {
    "_id": "6136270205530ee4f7690114",
    "email": "thang5@gmail.com",
    "name": "thang3",
    "password": "sdsa"
  },
  {
    "_id": "6136281405530ee4f7690115",
    "email": "thang5@gmail.com",
    "name": "thang5",
    "password": "sdsa"
  }
]
const style = {
  marginTop: '10px',
  padding: '20px',
  backgroundColor: 'rgb(241, 241, 241)',
  borderRadius: '7px',
  minHeight:'800px'
}
export default function Categories() {
  const dispatch = useDispatch();
  const handleChangeSearchChange = (e) => {
    dispatch(searchCategoriesChange(e.target.value))
  }
  React.useEffect(() => {
    dispatch(showCategories(test));
  })
  const list = useSelector(listCategoriesSelector)
  const searchText = useSelector(searchCategoriesSelector);
  console.log(list);
  return (
    <div>
      <Box sx={style}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={9}>
            <Typography variant="h4">Chủ đề từ vựng tiếng Nhật</Typography>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <TextField id="outlined-basic" label="Tìm kiếm chủ đề" variant="outlined" onChange={handleChangeSearchChange} />
          </Grid>
        </Grid>
        <Box sx={{ mt: '20px', borderTop: '1px solid black', pt:'20px' }}>
          <Grid container spacing={2}>
            {list.map((category) => (<Grid item xs={6} md={4} key={category._id}>
              <Category category={category} nameCategory={category.name} />
            </Grid>))}
          </Grid>
        </Box>
      </Box>
    </div>
  )
}