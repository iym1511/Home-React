import { createContext, useState } from "react";

import zipdak  from '../img/zipdak.jpg';
import modun from '../img/modun.jpg';
import zipdak3  from '../img/zipdak3.jpg';
import zipdak4  from '../img/zipdak4.jpg';
import zipdak5  from '../img/zipdak5.jpg';
import zipdak6  from '../img/zipdak6.jpg';
import zipdak7  from '../img/zipdak7.jpg';
import zipdak8  from '../img/zipdak8.jpg';
import { useNavigate } from "react-router-dom";


const DataContext = createContext();

const DataProvider = (({children}) => {

    // 간편견적 결과 페이지 이동
    const navigate = useNavigate();

    // Receipt 리스트 정보
    const [reciept, setReciept] = useState([]);

    // question 정보
    const [question, setQuestion] = useState([
        {
            id:1,
            title: "건물 유형 선택",
            answera: "아파트",
            answerb: "빌라",
            answerc: "단독주택",
            answerd: "오피스텔",
            answere: "상가",
            type: "EI",
        },
        {
            id:2,
            title: "도배 시공",
            answera: "사제",
            answerb: "브랜드",
            answerc: "도기",
            answerd: "타일",
            answere: "기타",
            type: "EI",
        },
        {
            id:3,
            title: "샷시 시공",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "EI",
        },
        {
            id:4,
            title: "바닥 시공",
            answera: "해당 없음",
            answerb: "실크",
            answerc: "합지",
            answerd: "대리석",
            answere: "기타",
            type: "SN",
        },
        {
            id:5,
            title: "베란다 시공",
            answera: "해당 없음",
            answerb: "거실 확장",
            answerc: "방 확장",
            answerd: "단올림",
            answere: "기타",
            type: "SN",
        },
        {
            id:6,
            title: "방문보수/교체",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "SN",
        },
        {
            id:7,
            title: "현관문 시공",
            answera: "해당 없음",
            answerb: "신발장",
            answerc: "타일",
            answerd: "중문",
            answere: "기타",
            type: "TF",
        },
        {
            id:8,
            title: "조명 시공",
            answera: "해당 없음",
            answerb: "전체 교체",
            answerc: "등",
            answerd: "스위치",
            answere: "기타",
            type: "TF",
        },
        {
            id:9,
            title: "총 예상 비용",
            answera: "500만 원 미만",
            answerb: "1,000 만 원 대",
            answerc: "2,000만 원대",
            answerd: "3,000만 원대",
            answere: "4,000만 원대 이상",
            type: "TF",
        },
        {
            id:10,
            title: "전체적인 실내 느낌 (희망사항)",
            answera: "모던",
            answerb: "미니멀",
            answerc: "심플",
            answerd: "내추럴",
            answere: "클래식",
        }
    ])
    
    // 

    // 결과 정보
    const [result, setResult] = useState([
        {
            id: 1,
            title: "A",
            type: "아파트",
            wallpaper: "사제",
            sash:"해당 없음",
            floor: "해당 없음",
            veranda:"해당 없음",
            roomdoor:"해당 없음",
            frontdoor:"해당 없음",
            light:"해당 없음",
            price:"500만 원 미만"
        },
        {
            id: 2,
            title: "B",
            type: "빌라",
            wallpaper: "브랜드",
            sash:"전체",
            floor: "실크",
            veranda:"거실 확장",
            roomdoor:"전체",
            frontdoor:"신발장",
            light:"전체 교체",
            price:"1,000만 원 대"
        },
        {
            id: 3,
            title: "C",
            type: "단독주택",
            wallpaper: "사제",
            sash:"도기",
            floor: "합지",
            veranda:"방 확장",
            roomdoor:"부분",
            frontdoor:"타일",
            light:"등",
            price:"2,000만 원 대"
        },
        {
            id: 4,
            title: "D",
            type: "오피스텔",
            wallpaper: "사제",
            sash:"타일",
            floor: "대리석",
            veranda:"단올림",
            roomdoor:"필름",
            frontdoor:"중문",
            light:"스위치",
            price:"3,000만 원 대"
        },
        {
            id: 5,
            title: "E",
            type: "상가",
            wallpaper: "사제",
            sash:"기타",
            floor: "기타",
            veranda:"기타",
            roomdoor:"기타",
            frontdoor:"기타",
            light:"해당 없음",
            price:"4,000만 원대 이상"
        },
        {
          id: 6,
          title: "F",
          type: "상가",
          wallpaper: "사제",
          sash:"기타",
          floor: "기타",
          veranda:"기타",
          roomdoor:"기타",
          frontdoor:"기타",
          light:"해당 없음",
          price:"4,000만 원대 이상"
      },
    ])

    const [score, setScore] = useState([
        {
            id:1,
            name:"집닥1",
            best : "EST",
        },
        {
            id:2,
            name:"집닥2",
            best : "ESF"
        },
        {
            id:3,
            name:"집닥3",
            best : "ENT"
        },
        {
            id:4,
            name:"집닥4",
            best : "ENF"
        },
        {
            id:5,
            name:"집닥5",
            best : "IST"
        },
        {
            id:6,
            name:"집닥6",
            best : "ISF"
        },
        {
            id:7,
            name:"집닥7",
            best : "INT"
        },
        {
            id:8,
            name:"집닥8",
            best : "INF"
        },
    ])


    const value = {
        state: { question, result, reciept, score },
        action: { setQuestion, setResult, setReciept, setScore }
    }
    return (
      <DataContext.Provider value={value}>
        {children}
      </DataContext.Provider>
    );

})

const {Consumer :DataConsumer} = DataContext;

export {DataConsumer , DataProvider};

export default DataContext;