import React from "react";

const TodoItem = (props) => {
    return (  
        <div className="todo-item">
            {props.item}    {/* map으로 받은 저장된배열값 출력 */}
        </div>
    );
}
 
export default TodoItem;
