import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {},
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header} style={{ background: 'green' }}>
      Header
    </div>
  );
};

export default Header;
