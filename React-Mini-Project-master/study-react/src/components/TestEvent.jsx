import {memo, useState } from "react";
import TestBox from "./TestBox";

const TestEvent = () => {
    const [memos, setMemo] = useState([
        {id : 1, text: "메모1"},
        {id : 2, text: "메모2"},
        {id : 3, text: "메모3"},
        {id : 4, text: "메모4"},
        {id : 5, text: "메모5"}
    ]);


    return (
        <div>
        <h3>이벤트 테스트 공간입니다</h3>
        {/*map을 통해서 전체 내용을 출력해주세요*/}
        {
            memos.map((memo)=>(
                <div key={memo.id}>
                    <p>{memo.text}</p>
                </div>
            ))
        }

        {/* TestBox를 이용하여 내용을 출력해주세요*/}
        {
        memos.map((memo)=>(
          <TestBox memo={memo} setMemo={setMemo} memos={memos}/>
        ))
      }
        </div>
    );
    };



export default TestEvent;