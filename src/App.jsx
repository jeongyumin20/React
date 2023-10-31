// App.jsx ( src )
import './App.css';
import Profile from './components/Profile'

// 커다란 root 박스
function App() { // return시 반드시 하나의 태그만 출력 
  const name = "홍길동";
  const list = ['HTML', 'CSS', 'React', 'JavaScript', 'MySQL'];
  return (
    <>
      <Profile />  {/* components 호출 */}
      <Profile />  
      <Profile />  
    </>
  );
}

export default App;
