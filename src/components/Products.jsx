// Products.jsx (src)
import React, { useEffect, useState } from "react";

export default function Products(){
  // products.json ➡️ fetch 사용
  const [products, setProducts] = useState([]); 
  const [checked, setChecked] = useState(false); // 체크박스 이벤트 상태 저장 

  const handleChange = () => setChecked(!checked);

  // useEffect() - 최초에 한 번만 fetch 실행 
  useEffect( () => {
      fetch(`data/${checked ? 'sale_' : '' }products.json`) // 무한 루프로 실행 
      .then((res) => res.json()) // fetch는 네트워크 통신이므로 넘어올 때는 무조건 문자형태로 가져옴  
      .then((data) => {
        console.log('data 📨');
        setProducts(data);
      })
      .catch(console.log('error'));

      return(() => {
        console.log('패치 후 정리해야하는 청소 작업 진행 ')
      })
    }, [checked]); // 초기 설정값 우린 빈 이차원 배열 

  return(
    <div>
      <h1>show products!!</h1>
      <input type="checkbox"  id="checkbox" onChange={handleChange}/>
      <label htmlFor="checkbox">Show only Sale!!</label>
      <ul>
        {products.map((product) => 
          <li key={product.id}>
            <h3> name : {product.name}</h3> 
            <h3> price : {product.price}</h3> 
            <h3> id : {product.id}</h3> 
          </li>
        )}
      </ul>
    </div>
  );
}