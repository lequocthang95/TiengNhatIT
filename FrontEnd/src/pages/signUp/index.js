import React,{ useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import LockIcon from '@mui/icons-material/Lock';
import { Typography, TextField, Grid, Button, Avatar, Container, Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import * as api from '../../redux/api'
import BackgroundImage from '../../images/sigup/nen.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    minHeight: '584px',
    paddingTop: '10px'
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    aligns: 'center',
    paddingBottom: theme.spacing(2),
    minHeight: '552px'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
  row: {
    display: 'flex',
    marginTop: '15px'
  },
  input: {
    position: 'relative',
  },
  errorMessage: {
    width:'100%',
    position: 'absolute',
    textAlign: 'center',
    color: '#ff3d00',
  },
  icon: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '32px',
    right: '15px',
    cursor: 'pointer',
  },
  icon2: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '32px',
    right: '15px',
    cursor: 'pointer',
  }
}));
export default function SignUp() {
  const classes = useStyles();
  
  const [labelType,setLabelType] = useState('password')
  const [labelType2,setLabelType2] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;
  }
  const handleShowPassword2 = ()=>{
    labelType2 === 'password'? setLabelType2('text') : setLabelType2('password') ;
  }

  const [nameError,setNameError] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [password2Error,setPassword2Error] = useState('');
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  function validation(details) {
    setNameError('');
    setEmailError('')
    setPasswordError('')
    setPassword2Error('')
    if (details.name===''){
      setNameError('Vui long nh???p ?????y ?????!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.name) === false){
        setNameError('T??n ????ng k?? kh??ng h???p l???!')
      } 
      if (details.name.length < 3){
        setNameError('Vui long nh???p ??t nh???t 3 k?? t???!')
      }
    }
    if (details.email===''){
      setEmailError('Vui long nh???p ?????y ?????!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if (regex.test(details.email) === false){
        setEmailError('Email kh??ng h???p l???!')
      }
    }
    if (details.password===''){
      setPasswordError('Vui long nh???p ?????y ?????!')
    }
    else{
      if (details.password.length < 6){
        setPasswordError('Vui long nh???p ??t nh???t 6 k?? t???!')
      }
      if (details.password.length > 50){
        setPasswordError('Vui long nh???p t???i ??a 50 k?? t???!')
      }
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.password) === false){
        setPasswordError('M???t kh???u kh??ng h???p l???!')
      } 
    }
    if (details.password2===''){
      setPassword2Error('Vui long nh???p ?????y ?????!')
    }
    else{
      if (details.password2 !== details.password){
        setPassword2Error('M???t kh???u kh??ng kh???p!')
      }
    }
    if (nameError||emailError||passwordError||password2Error){return false}
    else{return true}
  }

  const [details,setDetails] = useState({name:'',email: '', password:'',password2: '',})
  let history = useHistory();

  const trySignup = async () => {
    try {
      const response = await axios({
        method: "post",
        url: `${api.URL}/api/register`,
        data: details,
        headers:{"Content-Type" : "application/json"}
      })
      if (response.data.success) {
        alert('????ng k?? th??nh c??ng!')
        history.push('/login')
      }
      else  {
        setEmailError('Email ???? t???n t???i!')
        history.push('/signup')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSignUp = (e)=>{
    alert('Vui l??ng ?????i x??c nh???n th??ng tin!')
    if (checked===true){
      setEmailError('')
      if (validation(details)===false|| !details.name || !details.email || !details.password || !details.password2) {
        e.preventDefault();
      }
      else {
        trySignup();
      }
    }
    else {e.preventDefault();alert('Vui l??ng ?????ng ?? v???i ??i???u kho???n c???a Ti???ng Nh???t IT!')}
  }

  return (
    <Container className={classes.page}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
          </Box>
          <Typography component="h1" variant="h5" sx={{textAlign: 'center', color: '#dd2c00'}}>
            ????ng k?? t??i kho???n!
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="H??? v?? t??n"
                  autoComplete="lname"
                  onChange={e => setDetails({...details,name:e.target.value})}
                  value={details.name}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{nameError}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.input}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="?????a ch??? email"
                  autoComplete="email"
                  onChange={e => setDetails({...details,email:e.target.value})}
                  value={details.email}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{emailError}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.input}>
              {labelType === 'password' ? <VisibilityIcon className={classes.icon} onClick={handleShowPassword} /> : <VisibilityOffIcon  className={classes.icon} onClick={handleShowPassword} /> }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="M???t kh???u"
                  type={labelType}
                  autoComplete="current-password"
                  onChange={e => setDetails({...details,password:e.target.value})}
                  value={details.password}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{passwordError}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.input}>
              {labelType2 === 'password' ? <VisibilityIcon className={classes.icon2} onClick={handleShowPassword2} /> : <VisibilityOffIcon  className={classes.icon2} onClick={handleShowPassword2} /> }
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="X??c nh???n m???t kh???u"
                  type={labelType2}
                  autoComplete="current-password"
                  onChange={e => setDetails({...details,password2:e.target.value})}
                  value={details.password2}
                />
                <Typography variant="subtitle2" className={classes.errorMessage}>{password2Error}</Typography>
              </Grid>
              <Grid className={classes.row} item xs={12} >
                <FormControlLabel
                  checked={checked}
                  onChange={handleChange}
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="" 
                  sx={{paddingRight: '-10px', marginRight: 0}}
                />
                <Box sx={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
                  <Typography variant="body2">T??i ???? ?????c v?? ?????ng ?? v???i c??c <Link to="/terms" style={{color: '#f50057'}}>??i???u kho???n</Link> c???a Ti???ng Nh???t IT.</Typography>
                </Box>
                </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignUp}
            >
              ????ng k?? t??i kho???n
            </Button>
            <Grid container justifyContent="flex-end" sx={{marginTop: '5px'}}>
              <Grid>
                B???n ???? c?? t??i kho???n!
                <Link to="/login" variant="body2" style={{color: '#f50057'}}>
                   ????ng nh???p
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Container>
  );
}