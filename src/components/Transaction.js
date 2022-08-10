import React from "react";

const Transaction = ({name,amount,setName,setAmount,submitHandler}) => {
  return (
    <>
      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="transaction">Transaction</label>
          <input
            type="transaction"
            id="transaction"
            name="name"
            value = {name}
            onChange = {(e)=>setName(e.target.value)}
            placeholder="Enter transaction..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount(negative-expense, positive-income)</label>
          <input type="number" id="amount" name = "amount" placeholder="Enter Amount ..." value= {amount}
          onChange = {(e)=>setAmount(Number(e.target.value))}/>
        </div>
        <button className="btn" type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default Transaction;
