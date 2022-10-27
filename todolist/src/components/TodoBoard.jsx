import React from "react";
import TodoItem from "./TodoItem";
import InputComp from "./InputComp";

const TodoBoard = (props, deleteItem) => {
    return (  
        <div>
            <h1>Todo List</h1>
            {/* todolist에서 새값을 받아와서 받은 배열을 item에 저장해서 TodoItem에 넘겨줌 */}
            {props.todolist.map((item)=><TodoItem item={item} key={item.id}/>)}
        </div>
    );
}
 
export default TodoBoard;