import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  formWrapper: {
    width: 560,
    minHeight: 530,
    padding: '38px 37px 39px',
    background: '#ffffff',
  },
  form: {
    textAlign: 'right',
  },
  form__title: {
    margin: '0 0 21px',
    color: '##3D5170',
  },
  form__field: {},
  form__input: {
    width: 230,
  },
  form__submit: {
    margin: '25px 0 0',
  },
});

type Ref = HTMLDivElement;

const BasicInfo = React.forwardRef<Ref>((props, ref) => {
  const classes = useStyles();

  const fieldsTitles = [
    'Наименование компании',
    'Короткое название',
    'Тип юр.лица',
    'Сфера деятельности',
    'Регион',
    'Город',
    'Email',
    'Телефон',
  ];

  const displayFields = () => {
    return fieldsTitles.map((title) => (
      <Grid item sm={6} className={classes.form__field}>
        <TextField
          type='text'
          variant='outlined'
          label={title}
          required
          className={classes.form__input}
        />
      </Grid>
    ));
  };

  return (
    <div ref={ref} className={classes.formWrapper} tabIndex={-1}>
      <form className={classes.form}>
        <Typography
          align='left'
          variant='h5'
          component='h2'
          className={classes.form__title}
        >
          Добавить клиента
        </Typography>
        <Grid container spacing={3} justify='space-between'>
          {displayFields()}
          <Grid item sm={12} className={classes.form__field}>
            <TextField
              type='text'
              variant='outlined'
              label='Дополнительно (описание)'
              required
              fullWidth
              multiline={true}
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          variant='contained'
          color='primary'
          className={classes.form__submit}
        >
          Добавить
        </Button>
      </form>
    </div>
  );
});

export default BasicInfo;
