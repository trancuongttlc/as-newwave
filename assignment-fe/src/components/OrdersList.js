import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  retrieveOrder,
} from "../actions/order";

const status = {
  0: "FAILED",
  1: "SUCCEED",
  2: "PENDING"
}

const OrdersList = () => {
  const orders = useSelector(state => state.orders.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveOrder());
  }, [dispatch]);

  return (
    <div className="list row">
      <div className="col-md-12">
        <h4>Order List</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Code</th>
              <th>Money</th>
              <th>Status</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.productCode}</td>
                  <td>{order.money}</td>
                  <td>{status[order.status]}</td>
                  <td>{order.description}</td>
                  <td>{moment(order.createdAt).format('YYYY-MM-DD hh:mm:ss')}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersList;
