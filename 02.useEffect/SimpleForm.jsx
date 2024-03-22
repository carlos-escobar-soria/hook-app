import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () =>{

    const [formState, setFormState] = useState({
        email: "",
        username: ""
    })
    const {username, email} = formState;

    const onInputChange = (event) => {
        setFormState({
            ...formState, 
            [event.target.name]: event.target.value }
        )
            // console.log(formState);
    }

    useEffect(()=>{
        // console.log(`useEffect called!`);
    }, []);

    useEffect(()=>{
        // console.log(`useEffect userName!`);
    }, [formState]);
    
    useEffect(()=>{
        // console.log(`useEffect email!`);
    }, [email]);

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
            { username == "carlitos" && <Message/>}
        </>
    );
}