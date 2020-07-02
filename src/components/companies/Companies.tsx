import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Table from './Table';

import { makeStyles, createStyles } from '@material-ui/core';

import { customBreakpoint } from '../../settings';

const useStyles = makeStyles((theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gridTemplateColumns: '250px auto',
      gridTemplateRows: '76px auto',
      minHeight: '100vh',
      [theme.breakpoints.down(customBreakpoint)]: {
        gridTemplateColumns: 'auto',
        gridTemplateRows: '100px 100px auto',
      },
    },
  })
);

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
