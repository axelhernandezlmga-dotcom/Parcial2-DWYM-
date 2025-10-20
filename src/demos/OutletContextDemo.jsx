// Demostración 13: compartir datos con Outlet context.
// La ruta padre entrega un contador y la ruta hija lo consume.

import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function OutletContextDemo() {
  const headingRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  function handleIncrement() {
    setCount((previous) => {
      return previous + 1;
    });
  }

  // [DEMO: OUTLET_CONTEXT] — Pasamos datos al Outlet.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Outlet context para compartir estado
      </h1>

      <p>
        Al presionar el botón, actualizamos un contador en el padre. El hijo,
        renderizado con <code>Outlet</code>, recibe el valor gracias a{' '}
        <code>useOutletContext</code>.
      </p>

      <button type="button" onClick={handleIncrement} className="demo-button">
        Incrementar contador ({count})
      </button>

      <Outlet context={{ count }} />
    </section>
  );
}

export default OutletContextDemo;
