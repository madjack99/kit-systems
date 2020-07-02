import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from './images/Logo.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    sidebar: {
      gridRow: '1 / 3',
      padding: '29px 0',
      background: '#ffffff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      [theme.breakpoints.down(600)]: {
        gridRow: '1 / 2',
        display: 'flex',
        justifyContent: 'space-around',
      },
    },
    logo: {
      margin: '0 46px 39px 35px',
    },
    menu: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      [theme.breakpoints.down(600)]: {
        display: 'flex',
      },
    },
    menu__item: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      padding: '0 32px',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.greyBackground.main,
      },
    },
    menu__icon: {
      margin: '0 22px 0 0',
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();
  return (
    <aside className={classes.sidebar}>
      <img
        className={classes.logo}
        src={Logo}
        alt='Logo'
        width='169'
        height='52'
      />
      <ul className={classes.menu}>
        <li className={classes.menu__item}>
          <AssignmentIcon className={classes.menu__icon} color='primary' />
          Клиенты
        </li>
        <li className={classes.menu__item}>
          <ExitToAppIcon className={classes.menu__icon} color='secondary' />
          Выход
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
