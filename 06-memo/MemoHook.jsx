import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber=100)=>{
    for (let index = 0; index < iterationNumber; index++) {
        console.log('ahi vamos.......');
    }
}

export const MemoHook = ()=>{
    
    const {counter, onAddCounter} = useCounter(4000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);
    // console.log(counter);
    return (
        <>
            <h1>Counter: <small>{counter} </small></h1>
            <hr />
            <h4> {memorizedValue}</h4>
            <button
                className="btn btn-primary"
                onClick={()=>onAddCounter()}
            >   
                +1
            </button>

            <button 
                className="btn btn-outline-primary m-2"
                onClick={()=>{setShow(!show)}}
            > Show/Hide{JSON.stringify(show)}</button>
        </>
    );

}