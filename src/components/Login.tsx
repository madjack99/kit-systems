import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.greyBackground.main,
  },
  form: {
    width: 396,
    height: 376,
    margin: 'auto',
    padding: '40px 34px 0',
    backgroundColor: '#fff',
    boxShadow: '-1px 1px 5px 0px rgba(0,0,0,0.75)',
  },
  form__title: {
    margin: '0 0 48px',
    fontSize: 24,
    color: '#3D5170',
  },
}));

const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <div className={classes.form__title}>Авторизация</div>
      </div>
    </div>
  );
};

export default Login;
