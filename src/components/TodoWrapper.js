import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid"
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    
    const addTodo =  (todo) =>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);  // still don't know why this doesn't work properly
    }
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id===id ? {
            ...todo, completed: !todo.completed} : todo
        ))
    }

    const deleteeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const editTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (value, id) =>{
        setTodos(todos.map((todo) => 
            todo.id === id ? {...todo, task: value, isEditing:false}: todo
        ))
    }
    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo = {addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTask = {editTask} actualTask={todo} />
                ) : (
                    <Todo actualTask={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteeTodo} editTodo={editTodo} />    
                )
                
            ))}
        </div>
    );
}
