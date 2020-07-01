import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
    margin: '0 0 28px',
  },
}));

interface State {
  email: String;
  password: String;
  showPassword: Boolean;
}

const Login = (): JSX.Element => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <Typography variant='h5' component='h1' className={classes.form__title}>
          Авторизация
        </Typography>
        <form>
          <TextField
            label='Email'
            type='email'
            value={values.email}
            onChange={handleChange('email')}
            variant='outlined'
            required
            className={classes.form__input}
          />
          <FormControl className={classes.form__input} variant='outlined'>
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </form>
      </div>
    </div>
  );
};

export default Login;
