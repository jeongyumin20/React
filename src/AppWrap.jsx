// AppWrap.jsx (src)
import React from "react";
import Navbar from "./components/Navbar";
import HeaderImg from "./components/header/HeaderImg";
import HeaderSearch from './components/header/HeaderSearch';
import Content from "./components/Content";
import ProductList from "./components/Content/ProductList";
import Footer from "./components/Footer";
import './App.css';

export default function AppWrap() {
  return(
    <div>
      <Navbar>
        <HeaderImg />
        <HeaderSearch />
      </Navbar>
      <Content>
        <ProductList />
        <ProductList category='weekly'/>
        <ProductList category='only'/>
      </Content>
      <Footer>
      </Footer>
    </div>
  );
}