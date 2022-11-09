import "./TodoItem.css"
// react icons 사이트에서 npm install react-icons --save 해서 깔아주고 아이콘가져옴 (폰트어썸이랑 같은원리)
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
 
// Todolist 에서 todo 받아옴
const TodoItem = ({todo, onCheckToggle, onInsertToggle, onChangeSelectedTodo}) => {
    // {} 안에 들어가는 값은 APP에 useState 배열 이름을 적어서 불러와줌 (아무거나 적는 변수이름이아님)
    const {id, text, checked} = todo

    return (  
        <div className="TodoItem">      {/* 체크됫을때 변하게  참이면 className 'checked' 발동*/}
            <div className={`content ${checked ? 'checked' : ""}`}>
                {checked ? (
                <MdCheckBox 
                onClick={()=>{
                    onCheckToggle(id);
                    }}
                    />
                    ) : (
                    <MdCheckBoxOutlineBlank 
                    onClick={()=>{
                        onChangeSelectedTodo(todo);   // 글씨 클릭해도 추가 텍스트 나오게 해줌
                        onCheckToggle(id);
                        }}
                    />
                )}
                <div className="text" onClick={()=>onInsertToggle}> {/* App.js에 있는 todos안의 text들을 작성 */}
                    {text}
                </div> 
            </div>
        </div>
    );
}
 
export default TodoItem;