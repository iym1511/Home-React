import React, { useState, useEffect } from 'react';
import { FaStar} from 'react-icons/fa';
import styled from 'styled-components';
const ARRAY = [0, 1, 2, 3, 4];

function Rating() {
  const [clicked, setClicked] = useState([0, 0, 0, 0, 0]);

  const [clicked2, setClicked2] = useState([0, 0, 0, 0, 0]);

  // 댓글기능
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [comment, setComment] = useState([]);
  const [num, setNum] = useState(0);

  let clickStates2 = [...clicked];

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? 1 : 0;
    }
    setClicked(clickStates);
    console.log(clickStates)
  };
  
  const handleStarClick2 = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
    console.log(clickStates)
  };


  useEffect(() => {
    sendReview();
  }, [clicked]); //컨디마 컨디업

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
    // fetch('http://52.78.63.175:8000/movie', {
    //   method: 'POST',
    //   Headers: {
    //     Authroization: 'e7f59ef4b4900fe5aa839fcbe7c5ceb7',
    //   },
    //   body: JSON.stringify({
    //     movie_id:1
    //     star: score,
    //   }),
    // });
  };


  useEffect(() => {
    sendReview2();
  }, [clicked2]); //컨디마 컨디업

  const sendReview2 = () => {
    let score = clicked2.filter(Boolean).length;
  };


  const ClickStar = (e) => {
    e.preventDefault();
    setNum(num+1);
    const newText = {id: num , name: name ,text: text};
    const addText = comment.concat(newText);
    text ? setComment(addText) : alert("댓글을 입력해주세요")
    setText("");
  }
  

  let count = clicked.filter(element => 1 === element).length;

  return (
    <Wrap>
      <RatingText>평가하기</RatingText>

      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="30"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'yellowStar'}
            />
          );
        })}
      </Stars>

      {
        
        comment.map((c,i)=>(
          <div key={i}>
            <Container>
              {c.name}
              {c.text}

              <Stars2>
              {
                ARRAY.map((el, idx) => (
                    <FaStar
                      key={idx}
                      size="20"
                      className={clicked[el] && 'yellowStar'}               
                    />
                ))
              }
            </Stars2>

              <button onClick={()=>{
                const deletedText = comment.filter((d,index)=>(i != index ))
                  if(true){
                    setComment(deletedText);
                  }
                    console.log(comment);
              }}>삭제</button>
              
              </Container>
          </div>
        ))
      }
      
      <form onSubmit={ClickStar}>
        <input type="text" placeholder='입력하삼' onChange={(e)=>{setText(e.target.value)}}/>
        <button type="submit">작성</button>
      </form>
      
    </Wrap>
  );
}

export default Rating;

const Container = styled.div`
  display: flex;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  border: 1px solid red;
  width: 450px
`;

const RatingText = styled.div`
  color: #787878;
  font-size: 12px;
  font-weight: 400;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const Stars2 = styled.div`
display: flex;
padding-top: 5px;

& svg {
  color: gray;
}

:hover svg {

}

& svg:hover ~ svg2 {
  
}

.yellowStar {
  color: #fcc419;
}
`