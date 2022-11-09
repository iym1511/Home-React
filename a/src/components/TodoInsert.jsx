import { useEffect } from 'react';
import { useState } from 'react';
import {MdAddCircle, TiPencil, TiTrash} from 'react-icons/md'
import "./TodoInsert.css"
                    {/* App.js에서 받아온 함수들 */}
const TodoInsert = ({onInsertToggle, onInsertTodo, selectedTodo, onRemove}) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault(); // submit 특성상 새로고침 막는것
        onInsertTodo(value); // App.js 에서 받아온함수 (여기서 입력받은 value값 추가)
        setValue("");  // 입력받은 value 다시 빈칸으로 만들어줌
        onInsertToggle(); // 창을 닫아줌
    };
    
    useEffect(() => {
        if(selectedTodo) {
            setValue(selectedTodo.text); // 선택된 todo 안의 텍스트 보여줌
        }
    },[selectedTodo]) // 이거일떄만

    return (  
        <div>
            {/* 배경을 눌러도 insert 화면 꺼지게 해줌 */}
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>              {/* setValue 에 문자를 입력하면 value로 다시 받아옴 */}
                <input type="text" placeholder='please type' value={value} onChange={onChange}></input>
                {selectedTodo ? (
                    <div className='rewrite'>
                        <p>수정</p>
                        <p onClick={onRemove}>삭제</p>
                    </div>
                ) : (
                <button type="submit">
                    <MdAddCircle/>
                </button>
                )}
            </form>
        </div>
    );
}
 
export default TodoInsert;