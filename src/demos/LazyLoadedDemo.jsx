// Demostración 9: carga diferida (lazy) con React Router y Suspense.
// Este archivo se importa únicamente cuando el usuario visita la ruta.

import { useEffect, useRef } from 'react';

function LazyLoadedDemo() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: LAZY] — Contenido simple que se carga bajo demanda.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Carga perezosa con lazy()
      </h1>

      <p>
        Esta vista se descargó cuando la solicitaste. El router la envolvió en
        <code>Suspense</code> para mostrar un estado de carga mientras llegaba el
        módulo.
      </p>

      <p>
        Observa la consola: el archivo <code>LazyLoadedDemo.jsx</code> se cargó de
        forma diferida. Es útil para dividir el bundle en aplicaciones grandes.
      </p>
    </section>
  );
}

export default LazyLoadedDemo;
