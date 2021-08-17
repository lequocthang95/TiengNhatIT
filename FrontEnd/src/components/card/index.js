import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ButtonGroup } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  counters: {
    marginLeft: '5px',
  },
  buttonGroup: {
    width: '100%',
    justifyContent: 'center',
  }
});

export default function OwnerCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://itcomtor.com/public/category/phan-mem/img/phan-mem200x200.png"
          title="phan mem"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Phần mềm:ソフトウェア
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonGroup   className={classes.buttonGroup}>
          <Button size="small" color="primary">
            <ThumbUpAltIcon />
            <Typography className={classes.counters} component='span' color='textSecondary'>
                  100
            </Typography>
          </Button>
          <Button size="small" color="primary">
            <ThumbDownIcon />
            <Typography className={classes.counters} component='span' color='textSecondary'>
                  5
            </Typography>
          </Button>
          <Button size="small" color="primary">
            <FavoriteIcon />
            <Typography className={classes.counters} component='span' color='textSecondary'>
                  100
            </Typography>
          </Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}
