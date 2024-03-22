import { useState } from "react";
import {UserContext} from "./UserContext";


export const UseProvider = ({children})=>{

    const [user, setUser] = useState({});

   

    return (
        <>
            <UserContext.Provider
                value={{setUser, user}}
            >
                {children}
            </UserContext.Provider>
        </>
    );
}