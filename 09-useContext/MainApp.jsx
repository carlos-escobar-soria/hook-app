import { Navigate, Route, Routes, Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import {NavBar} from './NavBar';
import { UseProvider } from "./context/UseProvider";


export const MainApp = () => {
    return (
        <UseProvider>
            {/* <h1>MainApp</h1> */}
            <NavBar/>
            <hr />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="about" element={<AboutPage />}/>
                <Route path="login" element={<LoginPage/>}/>

                {/* alternativas para redireccionar si este elemento no se encuentra */}
                {/* <Route path="*" element={LoginPage} /> */}
                <Route path="/*" element={<Navigate to="/about"/>} />
            </Routes>
        </UseProvider>
    );
}