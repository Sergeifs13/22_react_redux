import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState, decrement, increment } from "../store/store";

const Counter = () => {

    const dispatch = useDispatch();
    const counter = useSelector((state: RootState) => state.counter.value)

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;