import React from "react";

const Cart = ({ cart, products }) => {
  const purchased = products.filter((p) => cart[p.id] > 0);

  if (purchased.length === 0) return null;

  const total = purchased.reduce((sum, p) => sum + cart[p.id] * p.price, 0);

  return (
    <div className="receipt-container text-center my-5">
      <h3 className="fw-bold mb-4">Your Receipt</h3>
      <div className="d-flex flex-column align-items-center">
        <div className="w-100" style={{ maxWidth: "400px" }}>
          {purchased.map((p) => (
            <div key={p.id} className="row border-bottom py-1">
              <div className="col text-start">{p.name}</div>
              <div className="col text-center">x{cart[p.id]}</div>
              <div className="col text-end text-success fw-semibold">
                ${p.price.toLocaleString()}
              </div>
            </div>
          ))}

          <div className="d-flex justify-content-between fw-bold mt-3 border-top pt-2">
            <span className="text-dark">TOTAL</span>
            <span className="text-success">${total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
