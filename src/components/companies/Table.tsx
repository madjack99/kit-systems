import React from 'react';
import MaterialTable from 'material-table';

import { makeStyles } from '@material-ui/core';

import { rootEndPoint } from '../../settings';

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    padding: '47px 78px 99px 69px',
    backgroundColor: theme.palette.greyBackground.main,
  },
}));

const Table = () => {
  const classes = useStyles();
  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    fetch(`${rootEndPoint}companies/`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        const mappedResults = results.map((company: any) => {
          const { name, registered_type, region, city } = company;
          return { name, registered_type, region, city };
        });
        setCompanies(mappedResults);
      });
  }, []);

  return (
    <div className={classes.tableWrapper}>
      <MaterialTable
        options={{
          actionsColumnIndex: 5,
          search: false,
          showTitle: false,
          filtering: true,
        }}
        columns={[
          { title: 'Наименование компании', field: 'name' },
          { title: 'Тип юр.лица', field: 'registered_type' },
          { title: 'Регион', field: 'region' },
          { title: 'Город', field: 'city' },
        ]}
        data={companies}
        actions={[
          {
            icon: 'delete',
            tooltip: 'Delete user',
            onClick: (event, rowData) => {
              console.log('click');
            },
          },
          {
            icon: 'edit',
            tooltip: 'Edit user',
            onClick: (event, rowData) => {},
          },
        ]}
      />
    </div>
  );
};

export default Table;
