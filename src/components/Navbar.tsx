import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { RouteComponentProps, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = ({
  history: {
    goBack,
    push,
    location: { pathname },
  },
}: RouteComponentProps) => {
  const classes = useStyles()
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Cytoid Level Generator
        </Typography>
        {pathname === '/' && (
          <Button color='inherit' style={{ fontWeight: 'bold' }} onClick={() => push('/preview')}>
            Preview
          </Button>
        )}
        {pathname === '/preview' && (
          <Button color='inherit' style={{ fontWeight: 'bold' }} onClick={goBack}>
            Back
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default withRouter(Navbar)
