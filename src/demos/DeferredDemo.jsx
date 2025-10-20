// Demostración 15: uso de defer y Await para cargar datos en paralelo.

import { Suspense, useEffect, useRef } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

function DeferredDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: DEFER] — Mostramos contenido inmediato y otro que espera la promesa.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Carga progresiva con defer
      </h1>

      <p>
        El loader entregó parte de la información de inmediato y diferió otra
        pieza. Gracias a <code>&lt;Await&gt;</code> mostramos un placeholder mientras
        esperamos la promesa lenta.
      </p>

      <Suspense fallback={<p>Cargando mensaje lento…</p>}>
        <Await resolve={loaderData.slowMessage}>
          {(message) => {
            return <p className="demo-highlight">{message}</p>;
          }}
        </Await>
      </Suspense>
    </section>
  );
}

export default DeferredDemo;
