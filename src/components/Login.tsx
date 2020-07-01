import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';

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
    color: '#3D5170',
  },
  form__input: {
    width: '100%',
  },
}));

const Login = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <Typography variant='h5' component='h1' className={classes.form__title}>
          Авторизация
        </Typography>
        <form>
          <TextField
            label='Email'
            variant='outlined'
            type='email'
            required
            className={classes.form__input}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
