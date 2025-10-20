// Demostración 10: ruta protegida que requiere autenticación falsa.
// El loader redirige a /login cuando el usuario no está autenticado.

import { Form, useLoaderData } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ProtectedAreaDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const authInfo = loaderData.authInfo;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: PROTECTED] — Zona que sólo se ve tras pasar por el redirect.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Área privada ficticia
      </h1>

      <p>
        Llegaste aquí porque el loader confirmó que estabas “logueado”. Puedes
        cerrar sesión para volver a probar la redirección.
      </p>

      <div className="demo-card">
        <h2 className="demo-subtitle">Estado actual</h2>
        <p>{authInfo.message}</p>
        <Form method="post">
          <button type="submit" name="intent" value="logout" className="demo-button">
            Cerrar sesión
          </button>
        </Form>
      </div>
    </section>
  );
}

export default ProtectedAreaDemo;
