import "./Template.css"
const Tamplate = ({children, todoLength}) => {
    return (  
        <div className="Template">
            <div className="title">오늘의 할 일({todoLength})</div> {/* 배열 개수를 반환 */}
            <div>{children}</div>
        </div>
    );
}
 
export default Tamplate;