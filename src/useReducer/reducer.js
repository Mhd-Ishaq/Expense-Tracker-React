export const reducer = (state, action)=>{
  // const sign = transaction.amount < 0 ? '-' : '+';
  // item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  switch(action.type){
    case 'UPDATE_VALUES' :
      const addedValue = [...state.lists , action.payload]
        const amounts = addedValue.map((transaction) => transaction.amount);
        const incomes  = amounts.filter((amount) => amount > 0).reduce((acc,amount) => acc + amount, 0).toFixed(2);
        const expenses  = amounts.filter((amount) => amount < 0).reduce((acc,amount) => acc + amount, 0).toFixed(2);
        const totals = amounts.reduce((acc,amount) => acc + amount ,0).toFixed(2);
    

      return{
        ...state,
        lists: addedValue,
        balance: totals,
        income: incomes,
        expense: expenses
      };

    case  'DELETE':
    const updateList = 
      state.lists.filter((list)=>{
      return list.id !== action.payload;
      });
  

    return{
      ...state,
      lists: updateList
    };

    default:
      throw new Error('enter the action')
  }
}