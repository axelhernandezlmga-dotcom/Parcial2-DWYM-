// Demostración 2: navegación imperativa con el hook useNavigate.
// Enseña cómo redirigir al usuario desde una función.

import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ImperativeNavigationDemo() {
  const headingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  function handleGoHome() {
    // [DEMO: NAVIGATE/handler] — Usamos navigate con -1 para volver atrás.
    navigate(-1);
  }

  function handleOpenDocs() {
    navigate('/docs/use-navigate');
  }

  // [DEMO: NAVIGATE] — Interfaz con botones que disparan navegación manual.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Navegación imperativa
      </h1>

      <p>
        Con <code>useNavigate</code> podemos cambiar la URL desde cualquier
        manejador de eventos. Esto es útil para flujos condicionales como login
        o formularios.
      </p>

      <div className="demo-card">
        <h2 className="demo-subtitle">Botones de ejemplo</h2>
        <p>
          Pulsa los botones y observa cómo cambia la ruta. React Router actualiza
          la vista sin recargar.
        </p>
        <div className="button-row">
          <button type="button" onClick={handleGoHome} className="demo-button">
            Volver atrás
          </button>
          <button
            type="button"
            onClick={handleOpenDocs}
            className="demo-button"
          >
            Abrir documentación
          </button>
        </div>
      </div>

      <p>
        Tip: <code>navigate(-1)</code> se comporta como el botón “atrás” del
        navegador. También puedes usar <code>navigate('/ruta', { replace: true })</code>
        para reemplazar el historial.
      </p>
    </section>
  );
}

export default ImperativeNavigationDemo;
