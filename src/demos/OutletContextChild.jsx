// Ruta hija que consume datos del Outlet context.

import { useOutletContext } from 'react-router-dom';

function OutletContextChild() {
  const context = useOutletContext();
  const count = context.count;

  // [DEMO: OUTLET_CONTEXT/child] — Mostramos el contador recibido del padre.
  return (
    <div className="demo-card">
      <h2 className="demo-subtitle">Componente hijo</h2>
      <p>El contador compartido vale: {count}</p>
    </div>
  );
}

export default OutletContextChild;
