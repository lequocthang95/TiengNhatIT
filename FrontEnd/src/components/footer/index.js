import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px',
    height: '80px',
    alignItems: 'center',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  footer: {
    backgroundColor: 'rgb(250, 243, 222)',
    height: '80px',
  }
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.container}>
          <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
              <HomeIcon className={classes.icon} />
              Team 2 IT
          </Link>
          <Link
              color="inherit"
              href="/getting-started/installation/"
              onClick={handleClick}
              className={classes.link}
          >
              <WhatshotIcon className={classes.icon} />
              Giới Thiệu
          </Link>
          <Typography color="textPrimary" className={classes.link}>
              <GrainIcon className={classes.icon} />
              Liên Kết
          </Typography>
          </Breadcrumbs>
          <div>© 2021 Team 2 IT</div>
      </Container>
    </div>
  );
}

