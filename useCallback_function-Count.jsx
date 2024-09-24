import { useState, useCallback, memo } from "react";


export function Assignment1() {
    const [count, setCount] = useState(0);

    // Use useCallback to prevent function recreation on every render
    const handleIncrement = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    const handleDecrement = useCallback(() => {
        setCount(count => count - 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
    <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
));

//Here in this code we used function count inside setCount so that we dont have to access the count from 
// the state, which will prevent re-rendering the children props i.e onIncrement and onDecrement.

//We use callback to prevent re-rendering
