import { Button, Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";

const CommentInput = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={10} >
            <FloatingLabel 
              controlId="floatingTextarea"
              label="오너 평가"
              className="mb-3"
              style={{color:"#C1C1C1"}}
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
          </Col>
          <Col xs={2} className="d-grid gap-2">
            <Button variant="primary" style={{backgroundColor:"rgb(60 60 60)"
          ,border:"none"}}>입력</Button>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
};

export default CommentInput;
