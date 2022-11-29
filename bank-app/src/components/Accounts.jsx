import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export const Accounts = () => {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [accountType, setAccountType] = useState("");

  const accountsId = accounts.map((object) => {
    return object.id;
  });
  const maxId = Math.max(...accountsId);

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

  const handleSubmit = (event) => {
    event.preventDefault();

    let new_acc = {
      id: maxId + 1,
      accountNumber: accountNumber,
      customerName: customerName,
      accountType: accountType,
    };

    dispatch({ type: "ADD_ACCOUNT", payload: new_acc });
  };

  const handleDelete = (e, cellVal) => {
    dispatch({ type: "DELETE_ACCOUNT", payload: cellVal.id });
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-around my-5">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <label>
            Enter Account Number:
            <input
              type="text"
              className="m-4"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </label>
          <label>
            Enter Customer Name:
            <input
              type="text"
              className="m-4"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
          </label>
          <label>
            Enter Account Type:
            <input
              type="text"
              className="m-4"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            />
          </label>
          <input type="submit" value="ADD" />
        </form>
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
