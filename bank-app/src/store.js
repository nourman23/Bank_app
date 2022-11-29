import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },

    {
      id: 2,
      customerName: "Nourman Alzawahreh",
      accountNumber: "236200",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Waad awajneh",
      accountNumber: "753369",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Rama jaradat",
      accountNumber: "765434",
      accountType: "Student accounts",
    },
    {
      id: 5,
      customerName: "Dareen Alhiasat",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
  numberOfAccounts: 5,
};

const ADD_ACCOUNT = (newAccount) => {
  return {
    type: "ADD_ACCOUNT",
    payload: { newAccount },
  };
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [
          ...state.accounts,
          {
            ...action.payload,
          },
        ],
        numberOfAccounts: state.numberOfAccounts + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
export default store;
