import { useReducer } from "react";

const initialState = { count: 0};



// An interface for our actions
interface CountAction {
    type: string;
}

// An interface for our state
interface CountState {
    count: number;
}

function reducer(state: CountState, action: CountAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}
export default UseReducerHook