import { useContext } from "react";
import { Container, Row,Col } from "react-bootstrap";
import DataContext from "../context/DataContext";
import ProfileUpdateModal from "../components/ProfileUpdateModal"

const Profile = () => {
    const {state} = useContext(DataContext);
    return (  
        <div>
            <Container >
                <Row style={{color:"white",height:"100vh"}}>
                    <Col s>
                    {/* 프로필 사진과 사진을 수정할 모델창 */}
                    {state.user.profile ? <div style={{width:"350px",height:"200px",
                backgroundImage:`url(${state.user.profile})`, backgroundSize:"cover", backgroundPosition:"center",
                margin:"20px auto",  border:"1px solid white"}}></div> : 
                <div style={{width:"350px", height:"200px", border:"1px solid white",margin:"20px auto"}}></div>}
                    <ProfileUpdateModal />
                    </Col>
                    <Col>
                    <h2>내정보</h2>
                    <p>이름 : {state.user.name}</p>
                    <p>생년월일 : {state.user.birthday}</p>
                    </Col>
                    <div>
                    {/* 이름과 찜목록을 출력 */}
                    <h2>이름 : {state.user.name}</h2>
                    <hr></hr>
                    <h2 className="like-title">찜 목록</h2>
                    <ul className="like-list">
                        {state.user.likelist.map((like)=>(<li className="like-name">{like.productName}</li>))}

                    </ul>
                    </div>
                </Row>
            </Container>
        </div>
    );
}
 
export default Profile;