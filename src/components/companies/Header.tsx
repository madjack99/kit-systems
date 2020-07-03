import React from 'react';
import {
  makeStyles,
  createStyles,
  Button,
  Typography,
  Modal,
} from '@material-ui/core';

import BasicInfo from './forms/BasicInfo';
import { customBreakpoint } from '../../settings';

const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 72px 22px',
      background: '#ffffff',
      color: '#3D5170',
      [theme.breakpoints.down(customBreakpoint)]: {
        borderTop: '1px solid lightgrey',
      },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <header className={classes.header}>
      <Typography variant='h5' component='h1'>
        Клиенты
      </Typography>
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Добавить
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
        aria-labelledby='basic-info-form'
        aria-describedby='add-company-basic-info'
      >
        <BasicInfo />
      </Modal>
    </header>
  );
};

export default Header;
