// Navbar.jsx (src)
import { Children } from "react"; // react 안에 들어있는 것은 Children 
// 컴포넌트에서는 이 객체를 호출 메모리에 들어갈 때는 첫글자가 소문자로 변경 
// 라이브러리 자체에서 사용 ( 스프링 동일 ) : 소문자 바뀌면 메모리에 올라가 있는 변수 
import '../Header.css';

export default function Navbar({children}) { // 변수 형태의 파라미터로 받아온다 
    return(
      <header>
        {children}
      </header>
    );
}