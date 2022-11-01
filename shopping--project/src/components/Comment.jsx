import { ListGroup } from "react-bootstrap";

const Comment = (props) => {
    const {comment} = props
    return (  
        <ListGroup.Item style={{backgroundColor:"#141414", color:"white"}}>
            <h4>{comment.name}</h4>
            <p className="Comment-Color" style={{color:"white"}}>{comment.text}</p>
        </ListGroup.Item>
    );
}
 
export default Comment;