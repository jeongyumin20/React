// AppCounter.jsx ( src )
import React, {useState} from 'react';
import './App.css';
import Counter from '../components/Counter'

// 커다란 root 박스
function App() { 
  const [totalCount, setTotalCount] = useState(0);
  const handleClick = (event) => setTotalCount((prev) => prev + 1);

  return (
    <>
      <div className='container'>
        <div className='banner'>Total : {totalCount}</div>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
        <Counter onClick={handleClick} totalCount={totalCount}/>
      </div>
    </>
  );
}

export default App;
