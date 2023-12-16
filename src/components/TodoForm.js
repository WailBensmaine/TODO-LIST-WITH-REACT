import React, {useState} from "react";

export const TodoForm = (props) => {
    const [value, setValue] = useState('')

    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(value);
        setValue("")
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            {/* <form className="TodoForm" onSubmit={handleSubmit}>   why in this line the arrow function to handlle the submit didn't work */}
            <input type="text" className="todo-input" value={value} placeholder="What should be on the list today?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    );
}