import { LoadingMessage } from "../03-example/LoadingMessage";
import { PokemonCard } from "../03-example/PokemonCard";
import { Quote } from "../03-example/Quote";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
// import { LoadingMessage } from "./LoadingMessage";
// import { PokemonCard } from "./PokemonCard";

PokemonCard

export const Layout = () => {
    
    const {counter, onRestCounter, onAddCounter} = useCounter(1);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const {autor, quote} = !!data&&data[0];

    return (
        <>
            <h1>Información pokémon</h1>
            <hr />
            {isLoading? 
                <LoadingMessage/>: 
                <PokemonCard 
                    id={counter} 
                    name={data.name}
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,                        
                        data.sprites.back_shiny,
                    ]}
                />}
            {/* <pre>{JSON.stringify(data, null, 2)} </pre> */}
            <h2>{data?.name}</h2>
            <button 
                className="btn btn-primary m-2"
                onClick={() => ((counter > 1)? onRestCounter(): null)}
            >
                Anterior</button>
            <button 
                className="btn btn-primary m-2"
                onClick={onAddCounter}
            >
                Siguiente</button>
        </>
    )
}