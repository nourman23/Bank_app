import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Form } from "./Form";
export const Accounts = () => {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "accountNumber",
      headerName: "Account Number",
      type: "number",
      width: 130,
      align: "center",
    },
    { field: "customerName", headerName: "Customer Name", width: 160 },
    { field: "accountType", headerName: "Account Type", width: 160 },
    {
      field: "Delete ",
      renderCell: (cellValue) => {
        return (
          <DeleteForeverIcon
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={(e) => {
              handleDelete(e, cellValue);
            }}
          />
        );
      },
    },
  ];

  const handleDelete = (e, cellVal) => {
    dispatch({ type: "DELETE_ACCOUNT", payload: cellVal.id });
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-around my-5">
        <Form />
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
            disableClickEventBubbling="false"
            sx={{ padding: "20px" }}
          />
        </div>
      </div>
    </>
  );
};
