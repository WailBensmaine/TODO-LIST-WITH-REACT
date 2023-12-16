import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const Todo = (props) => {
    return (
        <div className="Todo">
            <p onClick={() => props.toggleComplete(props.actualTask.id)} className={`${props.actualTask.completed ? 'completed' : ""}`}>{props.actualTask.task}</p>
            <div>
                {/* <FontAwesomeIcon onClick={props.editTodo(props.actualTask.is)} icon={faPenToSquare} /> here there is no infinite loop * syntax error(props.actualTask.is should be props.actualTask.id) => here is a big problem: infinite loop/}
                {/* <FontAwesomeIcon onClick={()=> props.editTodo(props.actualTask.is)} icon={faPenToSquare} /> here there is no infinite loop */}
                {/* <FontAwesomeIcon onClick={props.editTodo(props.actualTask.id)} icon={faPenToSquare} />   */}
                <FontAwesomeIcon onClick={() => props.editTodo(props.actualTask.id) /* <div>The right one */ } icon={faPenToSquare}  />
                <FontAwesomeIcon onClick={() => props.deleteTodo(props.actualTask.id)} icon={faTrash} />
            </div>
        </div>
    );
}