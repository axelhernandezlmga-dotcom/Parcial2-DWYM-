// Demostración 7: uso de errorElement y manejo de respuestas fallidas.
// La action opcional lanza un Response para que el errorElement la capture.

import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ErrorBoundaryDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const message = loaderData.message;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: ERROR_BOUNDARY] — Explicamos cómo provocar el error.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Error boundaries con Response
      </h1>

      <p>
        Esta vista tiene un loader que revisa la query string. Si visitas{' '}
        <code>?mode=fail</code> lanza un <code>Response</code> con estado 500.
        El <code>errorElement</code> captura la excepción y muestra un mensaje
        claro al usuario.
      </p>

      <div className="demo-card">
        <h2 className="demo-subtitle">Accesos rápidos</h2>
        <ul className="demo-simple-list">
          <li>
            <Link to="/demos/error-boundary">Versión correcta</Link>
          </li>
          <li>
            <Link to="/demos/error-boundary?mode=fail">
              Provocar error controlado
            </Link>
          </li>
        </ul>
      </div>

      <p>{message}</p>
    </section>
  );
}

export default ErrorBoundaryDemo;
