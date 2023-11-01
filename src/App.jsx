// App.jsx ( src )
import './App.css';
import Profile from './components/Profile'

// 커다란 root 박스
function App() { // return시 반드시 하나의 태그만 출력 
  const name = "홍길동"; //eslint-disable-line no-unused-vars
  const list = ['HTML', 'CSS', 'React', 'JavaScript', 'MySQL']; //eslint-disable-line no-unused-vars
  return (
    <div className='profile_container'>
      <Profile 
        image='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80'
        name = 'James'
        title = '프론트엔드 개발자'
        isNew = {true}/> 
      <Profile 
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name = 'Anna'
        title = '백엔드 개발자'/> 
      <Profile 
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name = 'Smith'
        title = '프론트엔드 개발자'/> 
    </div>
  );
}

export default App;
