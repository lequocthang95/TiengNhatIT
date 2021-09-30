import React, { useState } from 'react';
import { Container, makeStyles, Button,Link, Grid, Avatar} from '@material-ui/core';
import OurTeam from '../../components/cards/ourteamCards/ourTeam';
import Carousel, { Dots, autoplayPlugin,slidesToShowPlugin,} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { Box, Tabs, Tab, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    header: { 
      marginTop: '30px',
      textAlign: 'center',
    },
    body: { 
        minHeight: '1200px',
        height: '100%',
        border: '1px solid rgba(92,147,187,0.17)',
        borderRadius: '7px',
        backgroundColor: '#f5f5f5',
        marginTop: '10px',  
    }
}))
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function Community() {
    const classes=useStyles();
    const [current, setCurrent] = useState(0);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Container>
            <div className={classes.header}>
                <div>
                <Typography variant="h4">Hãy cùng với chúng tôi tạo nên một cộng đồng gắn kết.</Typography>
                <Typography variant="h6" style={{color:'rgba(0,0,0,0.54)'}}>Ở đây, bạn có thể đặt câu hỏi cho mọi người về các vấn đề
                    tiếng Nhật. Bạn có thể giúp đỡ người khác giải quyết vấn đề. Bạn cũng có thể chia sẽ những hiểu biết, kinh nghiệm 
                    của mình. Chúng tôi rất vui mừng và trân trọng những đóng góp của bạn!
                </Typography> 
                <Button variant='outlined' color="primary"
                    style={{marginTop: '10px'}}
                >
                    <Link href="/dangnhap" underline="none">Đăng Nhập</Link>
                </Button>
                </div>
                <div style={{marginTop: '30px',paddingLeft: '20px'}}>
                    <Grid container>
                        <Carousel 
                            value={current}  
                            onChange={setCurrent}                        
                            plugins={[
                                'infinite',
                                {   
                                    resolve: slidesToShowPlugin,
                                    options: {
                                        numberOfSlides: 6,
                                    }
                                },
                                {   
                                    resolve: autoplayPlugin,
                                    options: {
                                        interval: 2000, 
                                    }
                                }
                            ]}          
                            breakpoints={{
                                    640: {
                                        plugins:[
                                            'infinite',
                                            {   
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    numberOfSlides: 1, 
                                                }
                                            },
                                            {   
                                                resolve: autoplayPlugin,
                                                options: {
                                                    interval: 2000, 
                                                }
                                            }
                                        ]
                                    },
                                    900: {
                                        plugins:[
                                            'infinite',
                                            {   
                                                resolve: slidesToShowPlugin,
                                                options: {
                                                    numberOfSlides: 3,                                                    
                                                }
                                            },
                                            {   
                                                resolve: autoplayPlugin,
                                                options: {
                                                    interval: 2000, 
                                                    stopAutoPlayOnHover: true,
                                                }
                                            }
                                        ]
                                    },
                                }}
                            animationSpeed={500} 
                            autoPlay={2000}                     
                        > 
                            {OurTeam.map((infor) => (<Grid item key={infor.name} md={2} lg={12} style={{display: 'flex',alignItems: 'center'}}>
                            <Avatar src={infor.avatar} key={infor.name} />
                            <Typography variant='h6' style={{marginLeft: '10px'}}>{infor.name}</Typography>
                            </Grid>))} 
                        </Carousel>
                        <div style={{display: 'flex',width: '100%',justifyContent: 'center', marginTop: '10px'}}>
                            <Dots value={current} onChange={setCurrent} number={6} />
                        </div>
                    </Grid>
                    <Typography variant='h5'>Xin cám ơn sự đóng góp tích cực từ các bạn!</Typography>
                </div>
                <div style={{width: '100%',display: 'flex', justifyContent: 'center'}}>
                    <div style={{ width: '80%', borderTop: '1px solid rgba(63, 81, 181, 0.5)',borderStyle: 'double',margin: '10px',}}></div>                
                </div>
            </div>
            <div className={classes.body}>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                    Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    Item Three
                    </TabPanel>
                </Box>
            </div> 
        </Container>
    )
}
