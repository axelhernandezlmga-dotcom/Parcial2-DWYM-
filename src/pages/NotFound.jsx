// Página 404 para rutas no definidas.

import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function NotFound() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Ups, no encontramos la página
      </h1>

      <p>
        Puede que la ruta esté mal escrita o la demo todavía no exista. Usa el
        botón siguiente para regresar al catálogo.
      </p>

      <Link to="/" className="demo-button">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;
