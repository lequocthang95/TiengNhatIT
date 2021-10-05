import * as React from 'react';
import OurTeam from '../../components/cards/ourteamCards/ourTeam';
import { Grid, Avatar, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

function ListUsers({num,max,maxt, numt}) {
    var i = 0;
    let numb
    while (i < max ){
        if (num === i){
            numb = i*6   
        }
        i++; 
    }
    return(
        <Grid container>
            <Box sx={{ display: { xs: 'block', md: 'flex' }, justifyContent: 'space-between', width:'100%' }}>
                {OurTeam.slice(numb, numb+6).map((infor) => (
                <Grid item key={infor.name} md={2} lg={12} style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
                    <Avatar src={infor.avatar} key={infor.name} />
                    <Typography variant='h6' style={{marginLeft: '10px'}}>{infor.name}</Typography>
                </Grid>))}
            </Box>
        </Grid>
    )
}
export default ListUsers;