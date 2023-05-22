import { useReducer } from "react";

const initialState = {
  count: 0,
};
type StateValue = {
  count: number;
};
type UpdateAction = {
  type: string;
  payLoad: number;
};
type ResetAction = {
  type: string;
};
type StateAction = UpdateAction | ResetAction;

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
    case "reset":
      return initialState;

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
          onClick={() => dispatch({ type: "reset" })}
          className="btn btn-danger mx-2"
        >
          Reset
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
