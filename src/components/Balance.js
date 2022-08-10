import React from "react";

const Balance = ({balance,income,expense}) => {
  return (
    <>
      <h1>Expense Tracker</h1>

      <div className="container">
        <h4>Your Balance</h4>
        <h2 id="balance">₹{balance}</h2>
      </div>
      <div className="inc-exp-container">
        <div className="money">
          <h4>Income</h4>
          <p id="money-plus" className="money-plus">
            ₹{income}
          </p>
        </div>
        <div className="money">
          <h4>Expense</h4>
          <p id="money-minus" className="money-minus">
            ₹{expense}
          </p>
        </div>
      </div>
    </>
  );
};

export default Balance;
