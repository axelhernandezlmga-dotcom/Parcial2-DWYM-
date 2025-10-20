// Error boundary reutilizable para rutas declaradas en router.jsx.

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // [DEMO: ERROR_BOUNDARY/global] — Respuesta de error manejada con status.
    return (
      <section className="demo-section">
        <h1 className="demo-title">Algo salió mal ({error.status})</h1>
        <p>{error.statusText || 'Error desconocido.'}</p>
        <p>{error.data || 'Revisa la documentación de la demo para más detalles.'}</p>
      </section>
    );
  }

  if (error instanceof Error) {
    return (
      <section className="demo-section">
        <h1 className="demo-title">Ha ocurrido un error inesperado</h1>
        <p>{error.message}</p>
      </section>
    );
  }

  return (
    <section className="demo-section">
      <h1 className="demo-title">Error desconocido</h1>
      <p>No pudimos obtener detalles adicionales.</p>
    </section>
  );
}

export default ErrorBoundary;
