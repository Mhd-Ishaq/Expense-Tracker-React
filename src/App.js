import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';
import {reducer} from './useReducer/reducer';
import {v4 as uuidv4} from 'uuid';



const App = () => {
  const [name, setName] = useState('');
  const [amount, setAmount]= useState('');
  const defaultState = {
    balance :0.00,
    income : 0.00,
    expense :0.00,
    lists : [],
  }
  const [state, dispatch] = useReducer(reducer, defaultState);

  const submitHandler = (e)=>{
    e.preventDefault();
    if(name === '' || amount === ''){
      alert('please add Transaction Details');
      return
    }
    if(name && amount){
      const newItem = {name, amount ,id:uuidv4()};
      dispatch({type :'UPDATE_VALUES' ,payload : newItem});
      setName('');
      setAmount('');
    
    }else{
      dispatch({type:'NO_VALUE'});
    };
  }

  

  return (
    <>
    <Balance balance={state.balance} income={state.income} expense={state.expense} />
    <div>
    <h3>History</h3>
    {state.lists.length > 0 &&(
      <History lists={state.lists} dispatch={dispatch} />
    )}
    
    </div>
    <Transaction name={name} amount={amount} setName={setName} setAmount={setAmount} submitHandler={submitHandler}/>
    </>
  )
}

export default App
