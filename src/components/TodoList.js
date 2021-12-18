import React, {useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const[todos,setTodos]=useState([]);

    const addToDo=(todo)=>{
        //if the text is empty 
        if(!todo.text || /^\s*$/.test(todo.text)){
            return ;
        }
        // const newTodos=[todo,...todos];
        // setTodos(newTodos);
        // console.log(todos);
        setTodos((todos)=>[...todos,todo]);
        console.log(todos);
    };

    const completeTodo=id=>{
        let updatedTodos=todos.map(todo=>{
            if(id===todo.id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const removeTodo=id=>{
        let removeArr=todos.filter(todo=>id!==todo.id);
        setTodos(removeArr);
    };

    const updateTodo=( todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }
        setTodos(prev=>prev.map(item=>(item.id===todoId? newValue:item)));

    };


    return (
        <div>
            <h1>What's the plan for today?</h1>
            <TodoForm onSubmit={addToDo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
            
        </div>
    )
}

export default TodoList
