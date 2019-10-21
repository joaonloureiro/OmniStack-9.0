import React, { useState } from 'react';
import api from './services/api';
import './App.css';

import logo from './assets/logo.svg';

function App() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    

  }

  return (
    <div className="container">
      <img src={logo} alt="Logo AirCnC"/>
      <div className="content-box">
        <p>Ofereça <strong>spots</strong> para programadores e
        <br/>encontre <strong>talentos</strong> para a sua empresa</p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            name="email" 
            id="email" 
            placeholder="Seu melhor email"
            value={email}
            onChange={event => setEmail(event.target.email)}
            />
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
