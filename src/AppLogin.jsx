// AppLogin.jsx (src)
import React, { useState } from "react";
import './App.css';

export default function AppLogin() {
  const [form, setForm] = useState({id: '', pass : ''})
  
  const handleLoginChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name] : value})
    // console.log(form);

    if(form.id.length >= 8) alert('아이디는 8글자 미만으로 작성해주세요')
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form); // 데이터 입력 완벽한 form
  }

  return( 
    <form onSubmit={handleSubmit}>
      <label htmlFor="id">아이디 : </label>  
      <input type="text" name="id" id="id" value={form.id} onChange={handleLoginChange}/>
      <label htmlFor="pass">패스워드 : </label>
      <input type="password" name="pass" id="pass" value={form.pass} onChange={handleLoginChange} />
      <button type="submit">버튼</button>
    </form>
  );
}