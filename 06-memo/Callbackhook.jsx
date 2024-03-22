import React from "react";
import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import { useCallback } from "react";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const showIncrement = useCallback((c)=>{
        return setCounter((value)=> value + c);
    }, [])

    // const showIncrement = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1> useCallback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={showIncrement}/>
        </>
    )

}