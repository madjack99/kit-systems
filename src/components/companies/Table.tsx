import React from 'react';
import MaterialTable from 'material-table';

const Table = () => {
  return (
    <MaterialTable
      title='Title'
      options={{
        actionsColumnIndex: 5,
        search: false,
        showTitle: false,
      }}
      columns={[
        { title: 'Наименование компании', field: 'name' },
        { title: 'Тип юр.лица', field: 'type' },
        { title: 'Регион', field: 'region' },
        { title: 'Город', field: 'city' },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      ]}
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
  );
};

export default Table;
