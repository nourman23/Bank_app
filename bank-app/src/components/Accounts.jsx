import React from "react";
import { useSelector } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "accountNumber",
    headerName: "Account Number",
    type: "number",
    width: 130,
    align: "center",
  },
  { field: "customerName", headerName: "Customer Name", width: 180 },
  { field: "accountType", headerName: "Account Type", width: 160 },
];
export const Accounts = () => {
  const accounts = useSelector((state) => state.accounts);
  console.log(accounts);
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      <div
        className="shadow "
        style={{ minHeight: 450, width: "600px", textAlign: "center" }}
      >
        <DataGrid
          rows={accounts}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          hideFooterSelectedRowCount
          disableDensitySelector
          disableColumnSelector
          sx={{ padding: "20px" }}
        />
      </div>
    </div>
  );
};
