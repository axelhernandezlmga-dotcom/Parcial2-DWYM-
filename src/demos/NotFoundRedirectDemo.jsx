// Demostración 8: rutas 404 y redirecciones con Navigate o redirect en loader.

import { Link, Navigate, useLoaderData } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function NotFoundRedirectDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const redirectMessage = loaderData.redirectMessage;
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  if (shouldRedirect) {
    // [DEMO: REDIRECT/navigate] — Cuando shouldRedirect es true, usamos Navigate.
    return <Navigate to="/" replace />;
  }

  // [DEMO: REDIRECT] — Ofrecemos enlaces para probar 404 y redirect del loader.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Redirecciones y 404
      </h1>

      <p>{redirectMessage}</p>

      <div className="demo-card">
        <h2 className="demo-subtitle">Acciones disponibles</h2>
        <ul className="demo-simple-list">
          <li>
            <Link to="/ruta-que-no-existe">Ir a una página inexistente</Link>
          </li>
          <li>
            <Link to="/demos/not-found-redirect?forceRedirect=true">
              Activar redirect desde loader
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                setShouldRedirect(true);
              }}
              className="demo-button"
            >
              Redirigir ahora con Navigate
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default NotFoundRedirectDemo;
