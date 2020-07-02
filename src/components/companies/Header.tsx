import React from 'react';
import {
  makeStyles,
  createStyles,
  Button,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 72px 22px',
      background: '#ffffff',
      color: '#3D5170',
      [theme.breakpoints.down(600)]: {
        borderTop: '1px solid lightgrey',
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Typography variant='h5' component='h1'>
        Клиенты
      </Typography>
      <Button variant='contained' color='primary'>
        Добавить
      </Button>
    </header>
  );
};

export default Header;
