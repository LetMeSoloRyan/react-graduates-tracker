import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "../cssforlist.css";
import { rows } from "./mockdataforjobopp";

const columns = [
  {
    field: "employmentType",
    headerName: "employmentType",
    type: "Enumeration",
    width: 200,
    editable: true,
  },
  {
    field: "companyName",
    headerName: "companyName",
    type: "Text",
    width: 250,
    editable: true,
  },
  {
    field: "salary",
    headerName: "salary",
    type: "Text",
    width: 120,
    editable: true,
  },
  {
    field: "dataPosted",
    headerName: "dataPosted",
    type: "Date",
    width: 150,
    editable: true,
  },
  {
    field: "position",
    headerName: "position",
    type: "Text",
    sortable: false,
    width: 150,
  },
  {
    field: "contactPerson",
    headerName: "contactPerson",
    type: "Text",
    width: 150,
    editable: true,
  },
  {
    field: "contacNumber",
    headerName: "contactNumber",
    type: "Text",
    width: 200,
    editable: true,
  },
  {
    field: "contactEmail",
    headerName: "contactEmail",
    type: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "requirements",
    headerName: "requirements",
    type: "Text",
    width: 150,
    editable: true,
  },
  {
    field: "isArchive",
    headerName: "isArchive",
    type: "Boolean",
    width: 100,
    editable: true,
  },
];

export default function Jobopp() {
  return (
    <div className="listbackground">
      <h1>Job Opportunities</h1>
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
