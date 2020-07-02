import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Logo from './images/Logo.svg';

const useStyles = makeStyles((theme) =>
  createStyles({
    sidebar: {
      gridRow: '1 / 3',
      padding: '29px 46px 29px 35px',
      background: '#ffffff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      [theme.breakpoints.down(600)]: {
        gridRow: '1 / 2',
        background: 'yellow',
      },
    },
    logo: {
      display: 'block',
      margin: '0 0 29px',
    },
    menu: {
      listStyle: 'none',
      padding: 0,
    },
    menu__item: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
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
      <img className={classes.logo} src={Logo} alt='Logo' />
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
