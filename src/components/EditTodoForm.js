import React, {useState} from "react";

export const EditTodoForm = (props) => {
    const [value, setValue] = useState(props.actualTask.task)
    const handleSubmit = (e) => {
        e.preventDefault();
        props.editTask(value, props.actualTask.id);
        setValue("")
    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Update Task" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    );
}