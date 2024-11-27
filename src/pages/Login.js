


// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../store';
import './login.css';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      dispatch(setUser(username));
      navigate('/dashboard');
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
      <label>Email</label>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div>
      <label>Password</label>
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
        
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
