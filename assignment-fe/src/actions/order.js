import {
  RETRIEVE_ORDER,
  CREATE_ORDER,
} from "./types";

import OrderDataService from "../services/OrderService";

export const createOrder = (data) => async (dispatch) => {
  try {
    const res = await OrderDataService.create(data);

    dispatch({
      type: CREATE_ORDER,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveOrder = () => async (dispatch) => {
  try {
    const res = await OrderDataService.getAll();

    dispatch({
      type: RETRIEVE_ORDER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
