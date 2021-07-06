import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment(2));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>React Counter</h1>
      <div>Counter Value: {counter.counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
