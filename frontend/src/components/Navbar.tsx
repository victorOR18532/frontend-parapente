// components/Navbar.tsx
// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/eventos">Eventos</Link></li>
        <li><Link to="/inscripcion">Inscripción</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
      </ul>
    </nav>
  );
}
