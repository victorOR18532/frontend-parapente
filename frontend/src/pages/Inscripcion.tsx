// pages/Inscripcion.tsx
import '../styles/global.css';

export default function Inscripcion() {
  return (
    <div className="bg-page">
      <div className="content-box">
        <h2>Inscríbete a un Evento</h2>
        <p>Selecciona un evento para asegurar tu cupo:</p>
        <form>
          <select required>
            <option value="">-- Selecciona un evento --</option>
            <option value="1">Vuela Alto 2025</option>
            <option value="2">Festival del Aire</option>
          </select>
          <button type="submit">Inscribirme</button>
        </form>
      </div>
    </div>
  );
}
