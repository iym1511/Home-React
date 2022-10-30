import { ListGroup } from "react-bootstrap";

const Comment = () => {
    return (  
        <ListGroup.Item>
            <h4>이름</h4>
            <p className="Comment-Color">댓글내용</p>
        </ListGroup.Item>
    );
}
 
export default Comment;