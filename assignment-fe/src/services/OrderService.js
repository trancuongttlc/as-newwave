import http from "../http-common";

const getAll = () => {
  return http.get("/order");
};

const create = data => {
  return http.post("/order", data);
};

const OrderService = {
  getAll,
  create,
};

export default OrderService;
