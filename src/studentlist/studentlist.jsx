import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { students } from "./mockdataforstudentlist";
import "../cssforlist.css";

const columns = [
  { field: "programme", headerName: "Programme", width: 400 },
  {
    field: "user",
    headerName: "User",
    width: 150,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    width: 150,
    editable: true,
  },
  {
    field: "position",
    headerName: "Position",
    width: 300,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    sortable: false,
    width: 160,
  },
];

export default function Studentlist() {
  return (
    <div className="listbackground">
      <h1>Student list</h1>
      <Box sx={{ height: 700, width: "100%" }}>
        <DataGrid
          className=""
          rows={students}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
