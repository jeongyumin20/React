// ProductList.jsx
import { useEffect, useState } from "react";
import ProductView from "./ProductView";

export default function ProductList({category}){
  const [list, setList ] = useState([]);

  useEffect(() => {
    fetch('/data/products_olive.json')
    .then((res) => res.json())
    .then((data) => setList(data))
  }, [])
  
  let listCopy = [...list]

  function categoryFilter() {
    listCopy = listCopy.filter(list => list.category === (category ? category : list.category));
    return listCopy.map((item) => 
      <ProductView img={item.img} title={item.title} price={item.price} salePrice={item.salePrice} tag={item.tag} isTag={item.isTag}/>)
}


/*   function categoryFilter() {
      listCopy = listCopy.filter(list => list.category === category);
      return listCopy.map((item) => 
        <ProductView img={item.img} title={item.title} price={item.price} salePrice={item.salePrice} tag={item.tag} isTag={item.isTag}/>)
  } */

  return(
      <div className="list_container">
        {categoryFilter()}
      </div>
  );
}

