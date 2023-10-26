import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'programme', headerName: 'Programme', width: 400},
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 150,
    editable: true,
  },
  {
    field: 'position',
    headerName: 'Position',
    width: 300,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    sortable: false,
    width: 160,

  },
];


  const rows =[
    {   id:'1',
        programme:'front end web developer',
        user:'jacky',
        company:'google',
        position:'junior developer',
        phone:'1234567',
        email:'jacky@gmail.com'
    },
    {   id:'2',
        programme:'junior data engineer',
        user:'amy',
        company:'apple',
        position:'junior data engineer',
        phone:'1224547',
        email:'amy@gmail.com'
    },
    {   id:'3',
        programme:'digital marketing',
        user:'tom',
        company:'meta',
        position:'junior digital marketing',
        phone:'5675423',
        email:'ben@gmail.com'
    }
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}