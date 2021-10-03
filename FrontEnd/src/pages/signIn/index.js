import React, {useState} from 'react';
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
  icon: {
    position: 'absolute',
    color: 'rgb(186, 184, 184)',
    top: '112px',
    right: '10px',
    cursor: 'pointer',
  }
}));

export default function SignIn() {
  const classes = useStyles();
  
  const [labelType,setLabelType] = useState('password')
  const handleShowPassword = ()=>{
    labelType === 'password'? setLabelType('text') : setLabelType('password') ;
    
  }
  let history = useHistory();
  const [details,setDetails] = useState({email: '', password:''})
  const handleSingIn = (e) =>{
    history.push("/");
    console.log(details)
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
        <form className={classes.form}  onSubmit={handleSingIn} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setDetails({...details,email:e.target.value})}
            value={details.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={labelType}
            id="password"
            autoComplete="current-password"
            onChange={e => setDetails({...details,password:e.target.value})}
            value={details.password}
          />
          {labelType === 'password' ? <VisibilityIcon className={classes.icon} onClick={handleShowPassword} /> : <VisibilityOffIcon  className={classes.icon} onClick={handleShowPassword} /> }
          
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng nhập
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Bạn quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/dangky" variant="body2">
                {"Bạn chưa đăng ký tài khoản? Đăng ký"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}