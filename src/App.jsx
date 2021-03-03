import React from 'react'
import {Typography, AppBar, Button, CardACtions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'

import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return(
    <>
      <CssBaseline />
      <AppBar position={"relative"}>
        <Toolbar>
          <PhotoCamera />
          <Typography variant={"h6"}>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth={"sm"}>
            <Typography variant={"h2"} align={"center"} color={"textPrimary"} gutterBottom>
              Photo Album
            </Typography>
            <Typography variant={"h5"} align={"center"} color={"textSecondary"} paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consequuntur culpa ea id magni qui, sed unde vero voluptas!
            </Typography>
          </Container>
        </div>
        <Grid container spacing={2} justify={"center"}>
          <Grid item>
            <Button variant={"contained"} color={"primary"}>
              See my photos
            </Button>
          </Grid>
          <Grid item>
            <Button variant={"outlined"} color={"primary"}>
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default App