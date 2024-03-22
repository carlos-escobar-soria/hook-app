import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
    
    const {counter, onAddCounter} = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <>
            <h1> Counter: <Small value={counter}></Small></h1>
            <hr />
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
    )
}