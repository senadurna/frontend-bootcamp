import React from "react";

const Header = () => {
  return (
    <div className="header text-center my-4">
      <img
        src="/image/billgates.jpg"
        alt="Bill Gates"
        className="rounded-circle"
        width="125"
        height="125"
      />
      <h2 className="mt-3 fw-semibold">Spend Bill Gates' Money</h2>
    </div>
  );
};

export default Header;
