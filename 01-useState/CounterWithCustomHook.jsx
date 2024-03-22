import { useCounter } from "../hooks/useCounter";


export const CounterWithCustomHook = () => {

    const {counter, 
        onAddCounter,
        onRestCounter,
        onReset} = useCounter(10);

    return (
        <>
            <h1>counter with hook: {counter}</h1>
            <hr />
            <button className="btn btn-primary" onClick={onAddCounter}>+1</button>
            <button className="btn btn-primary" onClick={onReset}>Reset</button>
            <button className="btn btn-primary" onClick={onRestCounter}>-1</button>
        </>
    );
}