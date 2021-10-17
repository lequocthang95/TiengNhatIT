import React,{ useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import * as api from '../../redux/api'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    marginTop: '6px'
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
    top: '24px',
    right: '15px',
    cursor: 'pointer',
  },
  icon2: {
    position: 'absolute',
    zIndex:'100',
    color: 'rgb(186, 184, 184)',
    top: '24px',
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

  function validation(details) {
    setNameError('');
    setEmailError('')
    setPasswordError('')
    setPassword2Error('')
    if (details.name===''){
      setNameError('Vui long nhập đầy đủ!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.name) === false){
        setNameError('Tên đăng ký không hợp lệ!')
      } 
      if (details.name.length < 3){
        setNameError('Vui long nhập ít nhất 3 ký tự!')
      }
    }
    if (details.email===''){
      setEmailError('Vui long nhập đầy đủ!')
    }
    else{
      const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
      if (regex.test(details.email) === false){
        setEmailError('Email không hợp lệ!')
      }
    }
    if (details.password===''){
      setPasswordError('Vui long nhập đầy đủ!')
    }
    else{
      if (details.password.length < 6){
        setPasswordError('Vui long nhập ít nhất 6 ký tự!')
      }
      const regex = /^[a-zA-Z0-9]+$/;
      if (regex.test(details.password) === false){
        setPasswordError('Mật khẩu không hợp lệ!')
      } 
    }
    if (details.password2===''){
      setPassword2Error('Vui long nhập đầy đủ!')
    }
    else{
      if (details.password2 !== details.password){
        setPassword2Error('Mật khẩu không khớp!')
      }
    }
    if (nameError||emailError||passwordError||password2Error){return false}
    else{return true}
  }

  const [details,setDetails] = useState({name:'',email: '', password:'',password2: '',})
  let history = useHistory();
  const [resErrorEmail,setResErrorEmail] = useState('')
  const [resErrorName,setResErrorName] = useState('')

  const trySignup = async () => {
    setResErrorEmail('')
    setResErrorName('')
    try {
      const response = await axios({
        method: "post",
        url: `${api.URL}/api/register`,
        data: details,
      })
      if (response.data.error){
        setResErrorEmail(response.data.error.email[0])
        setResErrorEmail(response.data.error.name[0])
      }
      else {
        history.push('/dangnhap')
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleSignUp = (e)=>{
    setResErrorEmail('')
    setResErrorEmail('')
    if (validation(details)===false|| !details.name || !details.email || !details.password || !details.password2) {
      e.preventDefault();
    }
    else {
      trySignup()
      e.preventDefault()
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng ký
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.input}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Họ và tên"
                autoComplete="lname"
                onChange={e => setDetails({...details,name:e.target.value})}
                value={details.name}
              />
              <Typography variant="subtitle2" className={classes.errorMessage}>{nameError}</Typography>
              <Typography variant="subtitle2" className={classes.errorMessage}>{resErrorName}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.input}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Địa chỉ email"
                autoComplete="email"
                onChange={e => setDetails({...details,email:e.target.value})}
                value={details.email}
              />
              <Typography variant="subtitle2" className={classes.errorMessage}>{emailError}</Typography>
              <Typography variant="subtitle2" className={classes.errorMessage}>{resErrorEmail}</Typography>
            </Grid>
            <Grid item xs={12} className={classes.input}>
            {labelType === 'password' ? <VisibilityIcon className={classes.icon} onClick={handleShowPassword} /> : <VisibilityOffIcon  className={classes.icon} onClick={handleShowPassword} /> }
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Mật khẩu"
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
                label="Xác nhận mật khẩu"
                type={labelType2}
                autoComplete="current-password"
                onChange={e => setDetails({...details,password2:e.target.value})}
                value={details.password2}
              />
              <Typography variant="subtitle2" className={classes.errorMessage}>{password2Error}</Typography>
            </Grid>
            <Grid className={classes.row} item xs={12} >
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="" 
              />
              <Typography variant="body2">Tôi đã đọc và đồng ý chấp thuận các <Link href="/dieukhoan">điều khoản</Link> của Tiếng Nhật IT.</Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp }
          >
            Đăng ký tài khoản
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/dangnhap" variant="body2">
                Bạn đã có tài khoản? Đăng nhập
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}