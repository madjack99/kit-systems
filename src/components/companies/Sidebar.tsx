import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    sidebar: {
      gridRow: '1 / 3',
      background: 'red',
      [theme.breakpoints.down(600)]: {
        gridRow: '1 / 2',
        background: 'yellow',
      },
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();
  return <div className={classes.sidebar}>Sidebar</div>;
};

export default Sidebar;
