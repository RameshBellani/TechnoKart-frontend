import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Username and password are required.');
      return;
    }

    try {
      await axios.post('https://technokart-server.onrender.com/api/auth/register', { username, password, role });
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || 'Registration failed');
      } else {
        setErrorMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Role:
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="reader">Reader</option>
        </select>
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
