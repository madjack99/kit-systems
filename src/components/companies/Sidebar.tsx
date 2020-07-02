import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  sidebar: {
    gridRow: '1 / 3',
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar} style={{ background: 'red' }}>
      Sidebar
    </div>
  );
};

export default Sidebar;
