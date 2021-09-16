import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button,CardMedia } from '@material-ui/core';



const useStyles = makeStyles({

  root: {
    maxWidth: 345,
    minHeight: 300,
    '&:hover':{
      transform:'translateY(-2px)',
      boxShadow:'inset 0 4px 7px 1px #ffffff, inset 0 -5px 20px rgb(173 186 204 / 25%), 0 0 20px rgb(0 21 64 / 14%), 0 0 40px rgb(0 0 0 / 20%)',
      
    },
    transition: 'all 0.2s ease-in-out 0s',
    cursor: 'pointer',
  },
  team: {
    textAlign: 'left',
    fontSize: 18,
    hover:'translateY(-4px)',
    transition: 'all 0.2s ease-in-out 0s',
  },
  teamAV:{
    height: '80px',
    width: '80px',
    marginBottom: '10px',
  },
  speak:{
    marginTop: '10px',
  },
  contact:{
    maxHeight: '25px',
    justifyContent: 'space-between',
    paddingRight: '160px',
    paddingLeft: '20px',
  }, 
  icon:{
    fontSize: '20px',
    color: 'rgb(176, 190, 197)',
  }
});

export default function Category({title}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}


