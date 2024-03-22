import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
const newUser = {
    id:123,
    name:"carlos",
    email:"carlos.escobar.soria@gmail.com"
}
export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);
    console.log(user);

    return (
        <>
            <h1>LoginPage</h1>
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button
                className="btn btn-primary"
                onClick={()=> setUser( newUser)}
            >
                Agregar User
            </button>
        </>
    );
}