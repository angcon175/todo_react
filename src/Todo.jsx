import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todo.css";

export default function Todo(){
    let [todos,setTodos] = useState([{task: "sample-task", id: uuidv4()}])
    let [newTodo, setNewTodo] = useState("")

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}]
        })
        setNewTodo("")
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
       setTodos ((prevTodos) =>  prevTodos.filter((todo) => todo.id != id))
    }


    return (
        <>
            <input className="inp" value={newTodo}
            onChange={updateTodoValue}
            placeholder="add a task" required></input> 
            &nbsp; &nbsp;
            <button className="btnn" onClick={addNewTask}>Add Task</button>
            
            <hr style={{ border: '1px solid black' }} />
            <h4>Todo</h4>
            <ul>
                {todos.map((todo) => (
                <li key = {todo.id}>
                <span>{todo.task}</span>
                &nbsp; &nbsp;
                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
                </li>
                ))}
            </ul>
        </>
    )
}   