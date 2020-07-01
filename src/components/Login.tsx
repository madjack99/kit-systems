import React from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.greyBackground.main,
    },
  })
);

const Login = (): JSX.Element => {
  const classes = useStyles();
  return <div className={classes.root}>Login</div>;
};

export default Login;
