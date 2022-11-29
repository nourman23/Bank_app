import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const accountsId = useSelector((state) => state.numberOfAccounts);
  const dispatch = useDispatch();
  console.log(dispatch);
  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    let new_acc = {
      id: accountsId + 1,
      accountNumber: accountNumber,
      customerName: customerName,
      accountType: accountType,
    };

    dispatch({ type: "ADD_ACCOUNT", payload: new_acc });
  };
  return (
    <div className="w-100 d-flex justify-content-center my-5">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Account Number:
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </label>
        <label>
          Enter Customer Name:
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </label>
        <label>
          Enter Account Type:
          <input
            type="text"
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
          />
        </label>
        <input type="submit" />
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
          sx={{ padding: "20px" }}
        />
      </div>
    </div>
  );
};
