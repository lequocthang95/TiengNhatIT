import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {  Link,} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as checkToken from '../constants';
import * as checkLogin from '../constants/index';
import ModalBasic from './modals/basicModal.js';
import SignIn from './SignIn';
import SignUp from './SignUp';

const pages = ['community', 'blogs', 'about','terms','contacts'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const useStyles = makeStyles((theme) => ({
  selected:{
    color: '#ff8000 !important',
  },
}));
function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
const HeaderComponent = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const classes = useStyles();
  const [selectedType,setSelectedType] = React.useState('');
  const [isLogin,setIsLogin] = React.useState(checkLogin.isLogin);

  const handleAccountLogOut = () => {
    localStorage.setItem('isLogin',false)
 
    localStorage.removeItem('accessToken')
    setIsLogin(false);
    handleCloseUserMenu();
  }
  return (
    <AppBar position="static" sx={{ backgroundColor: '#f5f5f5'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link to="/" underline="hover" className={selectedType==='homepage' ? classes.selected : ''}
            onClick = {() => setSelectedType('homepage')}>TIẾNG NHẬT IT</Link>           
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${page}`} className={selectedType===`${page}` ? classes.selected : ''}  
                    onClick = {() => setSelectedType(`${page}`)}>{page}</Link>  
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            TIẾNG NHẬT IT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
              >
              <Link to={`/${page}`} className={selectedType===`${page}` ? classes.selected : ''}  
                onClick = {() => setSelectedType(`${page}`)}>{page}</Link>  
              </Button>
            ))}
          </Box>

          { isLogin==='true' ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {isLogin==='true' ? <Avatar alt="s" src="/static/images/avatar/2.jpg" /> :<Avatar {...stringAvatar('Tim Neutkens')} />}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={setting==='Logout' ? handleAccountLogOut : handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ):(
            <Box sx={{display:'flex'}}>
              <ModalBasic ModalName={<Button>Đăng Ký</Button>} ModalContent={<SignUp/>} />
              <ModalBasic ModalName={<Button>Đăng Nhập</Button>} ModalContent={<SignIn/>} />
            </Box>
          )} 
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderComponent;
