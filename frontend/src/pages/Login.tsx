// pages/Login.tsx
 // src/pages/Login.tsx
// src/pages/Login.tsx
import '../styles/global.css';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [correo, setCorreo] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(correo);
    navigate('/dashboard');
  };

  return (
    <div className="bg-page">
      <div className="content-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}

