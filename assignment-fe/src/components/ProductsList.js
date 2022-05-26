import React from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { createOrder } from "../actions/order";

const products = [
  {
    productCode: "Apple",
    money: 10000,
    description: "Iphone 16",
  },
  {
    productCode: "Samsung",
    money: 11000,
    description: "Galaxy 21",
  },
  {
    productCode: "Motorola",
    money: 13000,
    description: "Black phone",
  },
  {
    productCode: "Sony",
    money: 17000,
    description: "Sony erric",
  },
];
const ProducstList = () => {
  const dispatch = useDispatch();
  const handleOrder = (value) => {
    dispatch(
      createOrder(value)
    )
      .then((data) => {
        Swal.fire(
          'Successfully!',
          'Please check order list!',
          'success'
        )
      })
      .catch((e) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error, please try again!',
        })
      });
  };

  return (
    <div className="list row">
      <div className="col-md-12">
        <h4>Products List</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product Code</th>
              <th>Money</th>
              <th>Description</th>
              <th>Acticon</th>
            </tr>
          </thead>
          <tbody>
            {products.map((value) => (
              <tr key={value.productCode}>
                <td>{value.productCode}</td>
                <td>{value.money}</td>
                <td>{value.description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => handleOrder(value)}
                    className="btn btn-primary"
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProducstList;
