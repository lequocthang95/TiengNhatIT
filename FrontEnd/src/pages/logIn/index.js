import React, {useState} from 'react';
import axios from 'axios'
import * as api from '../../redux/api'
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

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: theme.spacing(12)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    position: 'relative',
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
  row:{
    display: 'flex',
    marginTop: '10px',
  },
}));

export default function LogIn() {
  const classes = useStyles(); 
  const [labelType,setLabelType] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;   
  }
  let history = useHistory();
  const [details,setDetails] = useState({email: '', password:''})
  const [resErrorEmail,setResErrorEmail] = useState('')
  const [resErrorPassword,setResErrorPassword] = useState('')
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const tryLogIn = async () => {
    setResErrorEmail('')
    setResErrorPassword('')
    try {
      const response = await axios({
        method: "post",
        url: `${api.URL}/api/login`,
        data: details,
      })
      if (response.data.message){
        alert('response.data.message')
      }
      else {
        history.push('/')
      }
    } 
    catch (error) {
      console.log(error);
    }
  }
  const handleLogIn = (e)=>{
    setResErrorEmail('')
    setResErrorPassword('')
    if (!details.email) {
      e.preventDefault();
      setResErrorEmail('Vui lòng nhập đầy đủ!')
    }
    if (!details.password) {
      e.preventDefault();
      setResErrorPassword('Vui lòng nhập đầy đủ!')
    }
    if (details.password && details.email) { 
      tryLogIn()
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
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
              <Typography variant="subtitle2" className={classes.errorMessage}>{resErrorPassword}</Typography>
            </Grid>
            <Grid className={classes.row} item xs={12} >
              <FormControlLabel
                checked={checked}
                onChange={handleChange}
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
            onClick={handleLogIn}
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