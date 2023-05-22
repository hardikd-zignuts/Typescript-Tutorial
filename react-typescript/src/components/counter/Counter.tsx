import { useReducer } from "react";

const initialState = {
  count: 0,
};
type StateValue = {
  count: number;
};
type StateAction = {
  payLoad: number;
  type: string;
};

function reducer(state: StateValue, action: StateAction) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 10,
      };

    case "decrement":
      return {
        ...state,
        count: state.count - 10,
      };

    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        <div>Counter {state.count}</div>
        <button
          onClick={() => dispatch({ type: "increment", payLoad: 10 })}
          className="btn btn-warning mx-2"
        >
          Increment by 10
        </button>
        <button
          onClick={() => dispatch({ type: "decrement", payLoad: 10 })}
          className="btn btn-warning mx-2"
        >
          Decrement by 10
        </button>
      </div>
    </>
  );
};

export default Counter;
