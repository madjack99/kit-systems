import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Table from './Table';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  grid: {
    display: 'grid',
    gridTemplateColumns: '100px auto',
    gridTemplateRows: '100px auto',
    minHeight: '100vh',
  },
});

const Companies = () => {
  const classes = useStyles();

  return (
    <div className={classes.grid}>
      <Sidebar />
      <Header />
      <Table />
    </div>
  );
};

export default Companies;
