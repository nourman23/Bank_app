import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Form = () => {
  const accounts = useSelector((state) => state.accounts);
  const dispatch = useDispatch();
  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [accountType, setAccountType] = useState("");
  console.log(accounts);
  const accountsId = accounts?.map((object) => {
    return object.id;
  });
  const maxId = Math.max(...accountsId);

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

  return (
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
  );
};
