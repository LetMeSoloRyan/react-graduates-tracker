import * as React from "react";
import './joboff.css';
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./mockdataforjoboff";

const columns = [
  {
    field: "companyName",
    headerName: "companyName",
    type: "Text",
    width: 250,
    editable: true,
  },
  {
    field: "annualSalary",
    headerName: "annualSalary",
    type: "Number",
    width: 120,
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
    field: "benefits",
    headerName: "benefits",
    type: "Text",
    width: 150,
    editable: true,
  },
];

export default function Joboff() {
  return (
    <div className="listbackground">
      <h1>Job Offers</h1>
      <Box sx={{ height: 800, width: "100%" }}>
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
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
