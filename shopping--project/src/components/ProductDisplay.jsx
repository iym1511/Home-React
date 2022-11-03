import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const ProductDisplay = (props) => {
  const {product} = props;
  const [index, setIndex] = useState(0)
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img src={require(`../img/${product.productPicture[index]}`)} alt="" />
          </div>
        </Col>
        <Col>
          <div>
            <h1>{product.productName}</h1>
            <p className="color-Name">{product.productDetail}</p>
            <p className="color-Name">색상 설명</p>
            <div>
              {
                // productColor에 있는 color 값을 백그라운드로 사용
                product.productColor.map((color, i)=>(
                  <div className="m-2" style={{ display:"inline-block", 
                                width: "30px", height:"30px", 
                                backgroundColor: color,
                                border : "1px solid white", borderRadius:"100%"
                              }}
                    onMouseEnter={()=>{setIndex(i)}}
                    ></div>
                )) 
              }
            </div>
            <div className="d-grid gap-2">
              <Button variant="outline-light" size="lg" style={{border:"1px solid white"}}>
                구매
              </Button>
              <Button variant="outline-light" size="lg" >
                장바구니
              </Button><Button variant="outline-light" size="lg">
                찜
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDisplay;
