import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_ALERT":
      return {
        ...state,
        alert: action.payload,
      };
    case "DELETE_ACTIVE_ALERT":
      return {
        ...state,
        alert: {
          id: "",
          alertTitle: "",
          alertType: "",
          alertText: "",
          alertLink: "",
          alertTimeLimit: "",
        },
      };
    case "ADD_ALERT":
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case "REMOVE_ALERT":
      return {
        ...state,
        alerts: state.alerts.filter((alert) => alert.id !== action.payload),
      };
    default:
      return state;
  }
};

const initialState = {
  alerts: [],
  alert: {
    id: "",
    alertTitle: "",
    alertType: "",
    alertText: "",
    alertLink: "",
    alertTimeLimit: "",
  },
};

export function useAlertReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
}
