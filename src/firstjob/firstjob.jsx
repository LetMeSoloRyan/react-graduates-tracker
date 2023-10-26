import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./mockdataforfistjob";

const columns = [
  {
    field: "companyName",
    headerName: "companyName",
    type: "Text",
    width: 300,
    editable: true,
  },
  {
    field: "annualSalary",
    headerName: "annualSalary",
    type: "Text",
    width: 200,
    editable: true,
  },
  {
    field: "title",
    headerName: "title",
    type: "Text",
    width: 150,
    editable: true,
  },
  {
    field: "workLocationArrangement",
    headerName: "workLocationArrangement",
    type: "Enumeration",
    width: 300,
    editable: true,
  },
  {
    field: "requirements",
    headerName: "requirements",
    type: "Text",
    sortable: false,
    width: 250,
  },
  {
    field: "monthFromGraduation",
    headerName: "monthFromGraduation",
    type: "number",
    width: 250,
    editable: true,
  },
];

export default function Firstjob() {
  return (
    <div className="listbackground">
      <h1>First Job</h1>
      <Box sx={{ height: 800, width: "100%" }}>
        <DataGrid
          rows={rows}
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
