import {
  CREATE_ORDER, RETRIEVE_ORDER,
} from "../actions/types";

const initialState = [];

const tutorialReducer = (orders = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_ORDER:
      return [...orders, payload];
    case RETRIEVE_ORDER:
      return payload;
    default:
      return orders;
  }
};

export default tutorialReducer;