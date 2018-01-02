import React from "react"

export const ToDoListSubLayout = (props) => {
    return (
        console.log(props),
        <div className="todolist-sub-layout">
            <p>To Do List Layout</p>
            { props.todolist.map((todo) => (
                <div key={todo._id}>
                    <p>{todo.name}</p>
                    <p>{todo.completed}</p>
                </div>
            )) }
            <button onClick={() => { props.getToDoList() }}>Get To Do List</button>
        </div>
    )
}