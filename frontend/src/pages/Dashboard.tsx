// pages/Dashboard.tsx
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h1>Hola {user} 👋</h1>
      <p>¡Estás en tu panel principal!</p>
    </div>
  );
}