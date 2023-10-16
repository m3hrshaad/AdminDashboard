import { useState } from 'react';
import { DataTable } from '../../components/dataTable/DataTable'
import { userRows } from '../../data';
import './users.scss'
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import { Add } from '../../components/add/Add';



const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    width: 150,
    type: "boolean",
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: false },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, status: true },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, status: true },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, status: false },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, status: true },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, status: true },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, status: false },
];

export const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows}/>
      {open && <Add slug="user" columns={columns} setOpen={setOpen}/>}
    </div>
  )
}
