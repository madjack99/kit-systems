import React from 'react';
import { makeStyles } from '@material-ui/core';
import classes from '*.module.css';

const useStyles = makeStyles({
  table: {},
});

const Table = () => {
  const classes = useStyles();
  return (
    <div className={classes.table} style={{ background: 'blue' }}>
      Table
    </div>
  );
};

export default Table;
