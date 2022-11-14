import { DragDropContext} from "react-beautiful-dnd";
import { Droppable} from "react-beautiful-dnd";
import { Draggable} from "react-beautiful-dnd";

const List = ({todoData, setTodoData}) => {

    const btnStyle = {
        color: "#fff",
        border:"none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
      }
      
    // 체크시 밑줄
    const handleCompelteChane = (id) =>{
        let newTodoData = todoData.map(data => {
        if(data.id === id){
            data.completed = !data.completed;
        }
        return data;
        })
        setTodoData(newTodoData);
    }

    // 함수형 스타일 생성
    const getStyle = (completed) => {
        return{
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? ("line-through") : ("none") //true면 밑줄 false면 원본
        }
      }
    
    
      // 할일 filter로 지우기
      // button onClick에서 클릭될때 받은 id와 현재 배열에있는 id 를 비교
      const handleClick = (id) => {                                  //배열에 있는 id
        setTodoData(todoData.filter(data => data.id !== id));
      }

      // drag drop 위치 바꿔주는 함수
      const handleEnd = (result) => {
        // 목적지가 없으면(이벤트 취소) 이 함수를 종료합니다.
        if(!result.destination) return;

        // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
        const newTodoData = [...todoData];

        // 1. 변경시키는 아이템을 배열에서 지워줍니다.
        // 2. return 값으로 지워진 아이템을 잡아줍니다.     / 하나를 지워준다
        const [reorderedItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderedItem을 insert 해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderedItem);
        setTodoData(newTodoData);
      }

    return (  
        <div>
        <DragDropContext onDragEnd={handleEnd}>
            <Droppable droppableId="todo" style={{marginTop:"200px"}}>
                {(provided)=> ( 
                <div {...provided.droppableProps} ref={provided.innerRef}>
                {/* 할일 목록 나열 / data안에 todoData 배열들 들어감*/}
                {todoData.map((data, index)=>(
                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                    {(provided, snapshot) => (
                    <div key={data.id} style={getStyle(data.completed)} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>    
                        <div style={{border:"1px solid red", padding:"10px",margin:"10px auto",display:"inline-block",width:"95%" }}> 
                            <input type="checkbox" defaultChecked={false} onChange={()=> handleCompelteChane(data.id)}/>
                            {data.title}
                            <button style={btnStyle} onClick={()=>handleClick(data.id)}>X</button>
                        </div>
                    </div>  
                    )}
                </Draggable>
                ))}
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>
        </div>
    );
}
 
export default List;

