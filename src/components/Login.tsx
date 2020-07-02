import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
  Typography,
  TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { rootEndPoint } from '../settings';

const useStyles = makeStyles((theme) => ({
  loginBackground: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.greyBackground.main,
  },
  loginContents: {
    width: 396,
    minHeight: 376,
    margin: 'auto',
    padding: '40px 34px 0',
    backgroundColor: '#fff',
    boxShadow: '-1px 1px 5px 0px rgba(0,0,0,0.75)',
  },
  title: {
    margin: '0 0 48px',
    color: '#3D5170',
  },
  form: {
    textAlign: 'right',
  },
  form__input: {
    width: '100%',
    margin: '0 0 28px',
  },
  alert: {
    margin: '0 0 28px',
    textAlign: 'left',
  },
  form__submit: {
    width: 99,
    height: 36,
    margin: '0 0 28px',
    padding: '10px 15px',
  },
}));

interface State {
  email: String;
  password: String;
  showPassword: Boolean;
}

const Login = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [loginError, setLoginError] = React.useState(null);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let response;
    let data;

    try {
      response = await fetch(`${rootEndPoint}token/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      data = await response.json();
    } catch (error) {
      console.log('Connection Error');
    }

    if (response && response.status === 200) {
      localStorage.setItem('token', data.access);

      history.push('/companies');
    } else if (response && response.status !== 200) {
      setLoginError(data.detail);
    }
  };

  return (
    <div className={classes.loginBackground}>
      <div className={classes.loginContents}>
        <Typography variant='h5' component='h1' className={classes.title}>
          Авторизация
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
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
              required
              labelWidth={70}
            />
          </FormControl>
          {loginError && (
            <Alert severity='error' className={classes.alert}>
              {loginError}
            </Alert>
          )}
          <Button
            variant='contained'
            color='primary'
            className={classes.form__submit}
            type='submit'
          >
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
