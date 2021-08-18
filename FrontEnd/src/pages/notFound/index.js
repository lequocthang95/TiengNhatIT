import React from 'react';
import { Container, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      height: '80px',
      backgroundColor:'red',
      marginTop: '100px',
    },
}))
export default function Community() {
    const classes=useStyles();
    return (
        <Container className={classes.container}>
        <div>
            
            Not found
        </div>
        </Container>
    )
}
