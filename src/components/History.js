import React from "react";

const History = ({lists, dispatch}) => {
  return (
    <>
      {lists.map((list) => {

        const { name, amount } = list;
        return (
            <ul id="list" className="list"key={(list.id)} >
              <li className="minus" key={(list.id)} >
                <h4>{name}</h4>
                <h4> {amount}</h4>
                <button className="delete-btn" onClick={() => dispatch({ type: "DELETE", payload: list.id })}
                >X</button>
              </li>
            </ul>

        );
      })}
    </>
  );
};

export default History;
