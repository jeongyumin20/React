// AppToggle.jsx
import React, { useState } from "react";
import './App.css';
import Products from "./components/Products";

export default function AppToggle() {
  const [ showProduct, setShowProduct ] = useState(false);
  const handleClick = (evennt) => setShowProduct(!showProduct)
  // const handleClick = (evennt) => setShowProduct((show) => !show)
  

  return(
    <>
      <button onClick={handleClick}>Toggle</button>
      { showProduct && <Products /> } {/* // 리액트 최신문법이라 사용 가능 : 바벨이 하위버전이면 if() 문으로 전환 진행  */}
    </>
  );
}