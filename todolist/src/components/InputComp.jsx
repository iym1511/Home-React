// 1. 인풋창이있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다
// 3. 아이템 삭제버튼을 누르면 삭제가 가능하다

import React from "react";
import { useState } from "react";
import TodoBoard from "./TodoBoard";

const InputComp = () => {
    const [inputValue, setInputValue] = useState("");
    const [todolist, setTodolist] = useState([]); // 이 배열 안에 할일 저장

    const addItem = () => {
        setTodolist([...todolist,inputValue]) // ()...todolist)기존아이템은 유지하고 뒤에 새로운 값 추가
    }
    const deleteItem = (id) => {
       const DelInput = todolist.filter((todolist) => todolist.id!== id);
       setTodolist(DelInput);
    }

    return (  
        <div>       {/* setInputValue에서 입력한거 받아와서 저장된inputValue보유 */}                      
            <input value={inputValue} type="text" onChange={(e)=>{setInputValue(e.target.value)}}/>
            <button onClick={addItem}>추가</button>
            <TodoBoard todolist={todolist} /> {/* props로 todoBard에 배열넘겨줌 */} 
        </div>
    );
}
 
export default InputComp;