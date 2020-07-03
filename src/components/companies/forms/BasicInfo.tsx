import React from 'react';
import {
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
} from '@material-ui/core';

import { rootEndPoint } from '../../../settings';

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

interface BasicInfo {
  name: String;
  shortname: String;
  registered_type: String;
  workscope: String;
  region: String;
  city: String;
  email: String;
  phone: String;
}

const BasicInfo = React.forwardRef<Ref>((props, ref) => {
  const classes = useStyles();
  const [basicInfo, setBasicInfo] = React.useState({
    name: '',
    shortname: '',
    registered_type: '',
    workscope: '',
    region: '',
    city: '',
    email: '',
    phone: '',
    description: '',
  });

  const namesAndLabels = [
    { fieldLabel: 'Наименование компании', fieldTitle: 'name' },
    { fieldLabel: 'Короткое название', fieldTitle: 'shortname' },
    { fieldLabel: 'Тип юр.лица', fieldTitle: 'registered_type' },
    { fieldLabel: 'Сфера деятельности', fieldTitle: 'workscope' },
    { fieldLabel: 'Регион', fieldTitle: 'region' },
    { fieldLabel: 'Город', fieldTitle: 'city' },
    { fieldLabel: 'Email', fieldTitle: 'email' },
    { fieldLabel: 'Телефон', fieldTitle: 'phone' },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBasicInfo({
      ...basicInfo,
      [event.target.name]: event.target.value,
    });
  };

  const displayFields = () => {
    return namesAndLabels.map(({ fieldLabel, fieldTitle }) => {
      return (
        <Grid item sm={6} className={classes.form__field} key={fieldTitle}>
          <TextField
            type='text'
            variant='outlined'
            label={fieldLabel}
            required
            name={fieldTitle}
            className={classes.form__input}
            value={basicInfo[fieldTitle as keyof BasicInfo]}
            onChange={handleChange}
          />
        </Grid>
      );
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let response;
    let data;

    try {
      response = await fetch(`${rootEndPoint}companies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(basicInfo),
      });
    } catch (error) {
      console.log('Network error');
    }

    if (response) {
      data = await response.json();
      console.log(data);
    }
  };

  return (
    <div ref={ref} className={classes.formWrapper} tabIndex={-1}>
      <form className={classes.form} onSubmit={handleSubmit}>
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
              name='description'
              value={basicInfo.description}
              onChange={handleChange}
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
