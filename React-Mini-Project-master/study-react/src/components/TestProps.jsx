import { useState } from "react";

const TestProps = (props) => {
    // props 값 product을 가져와서 아래 내용을 출력하세요
    const {product, setProduct, children} = props;
    // state값 input을 만들어서 값을 입력받으세요
    const [input, setInput] = useState("");

    return (  
        <div>
            {/* product를 출력하시오 */}
            <h1>{product}</h1>
            {/* input의 값을 입력받는 공간 */}
            <input type="text" onChange={(e)=>{setInput(e.target.value)}}/>
            {/* 받아온 setProduct이름을 수정 */}
            <button onClick={()=>{setProduct(input)}}>input에서 입력받은 값으로 이름  수정</button>
            {/* children을 받아와서 출력하세요 */}
            {children}
        </div>
    );
}
 
export default TestProps;