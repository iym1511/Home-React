import TodoItem from "./TodoItem"
import "./TodoList.css"

// App에 있는 useState todos값 받아와서 배열로 만들어주
const TodoList = ({todos,onCheckToggle,onInsertToggle,onChangeSelectedTodo}) => {
    return (  
        <div className="TodoList">  
            {        // 배열 리스트생성 / 배열에 text출력
                todos.map(todo =>(<TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle} onInsertToggle={onInsertToggle} onChangeSelectedTodo={onChangeSelectedTodo}/>))  // key값 오류안생기게해줌
            }
        </div>
    );
}
 
export default TodoList;