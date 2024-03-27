import { useReducer } from "react";

function reducer(state, action) {
  const { type } = action;

  switch (type) {
    case "increment":
      const newCount = state.count + 1;
      const hasError = newCount > 5;
      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum count reached" : null,
      };
    case "decrement":
      const newCount1 = state.count - 1;
      const hasError1 = newCount1 < 0;
      return {
        ...state,
        count: hasError1 ? state.count : newCount1,
        error: hasError1 ? "Minimum count reached" : null,
      };
    default:
      return state;
  }
}

export const Home = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <div>
      <h1>useReducer Hook</h1>
      <div>Count: {state.count}</div>
      {state.error && <div style={{ color: "red" }}>{state.error}</div>}

      <button onClick={() => dispatch({ type: "increment" })}>
        Incremdent
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};
