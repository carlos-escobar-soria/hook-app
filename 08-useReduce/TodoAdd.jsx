import { useForm } from "../hooks/useForm";

export const TodoAdd = ({onNewTodo}) => {

    const {description, onInputChange, onClearInput} = useForm({
        description:"",
    });

    const onFormaSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1 ) return ;
        const todo = {
            id: new Date().getTime(),
            done:false,
            description: description
        }
        onNewTodo(todo);
        onClearInput();
    }




    return (
        <>
            <form action="" onSubmit={onFormaSubmit}>
                <input 
                    type="text" 
                    placeholder="Qué hay que hacer"
                    className="form-control"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    
                />
                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                >
                    Agregar
                </button>
            </form>
        </>
    );
}