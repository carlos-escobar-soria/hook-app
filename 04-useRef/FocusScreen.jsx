import { useRef } from "react";


export const FocusScreen = ()=>{

    const inputRef = useRef(); // mantiene la referencia de un elemento html que se quiera utilizar

    const onClick =() => {
        // document.querySelector('input').select();   
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <>
            <h1> Focus Screen</h1>
            <hr />

            <input 
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"    
                className="form-control"
            />
            <input 
                type="text"
                placeholder="Ingrese su nombre"    
                className="form-control"
            />
            <input 
                type="text"
                placeholder="Ingrese su nombre"    
                className="form-control"
            />
            <input 
                type="text"
                placeholder="Ingrese su nombre"    
                className="form-control"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={ onClick }
            >
                set focus
            </button>

        </>
    );
}