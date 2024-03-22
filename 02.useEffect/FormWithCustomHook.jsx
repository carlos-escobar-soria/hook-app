import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () =>{

    const {formState, onInputChange, username, email, password, onClearInput} = useForm({
        username:"",
        email: "",
        password: ""
    })

    // const {username, email, password} = formState;

    // useEffect(()=>{
    //     // console.log(`useEffect called!`);
    // }, []);

    // useEffect(()=>{
    //     // console.log(`useEffect userName!`);
    // }, [formState]);
    
    // useEffect(()=>{
    //     // console.log(`useEffect email!`);
    // }, [email]);

    return (
        <>
            <h1> Formulario Simple</h1>
            <hr/>
            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username" 
                value={username}
                onChange={onInputChange}

            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="carlitosrobertoes@gmail.com"
                name="email" 
                value={email}
                onChange={onInputChange}
            />

            <input 
                type="password"
                className="form-control mt-2"
                placeholder="*******"
                name="password" 
                value={password}
                onChange={onInputChange}
            />
            <button className="btn btn-primary mt-2" onClick={onClearInput}>Borrar</button>
        </>
    );
}