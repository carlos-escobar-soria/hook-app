import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";



export const TodoApp = () => {

    const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, onToggleTodo} = useTodo([]);

    return (
        <>
            <h1>TodoApp: {todosCount()},  <small> pendiente: {pendingTodosCount()}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo= {onToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4> Agregar todo </h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
            
        </>
    )
}