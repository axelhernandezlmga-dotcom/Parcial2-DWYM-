// Layout principal de la aplicación. Contiene la navegación superior,
// el espacio principal donde se renderizan las rutas hijas y utilidades
// compartidas como la restauración de scroll.

import { Link, NavLink, Outlet, ScrollRestoration } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function RootLayout() {
  // Referencia al encabezado principal del layout.
  const headingRef = useRef(null);

  useEffect(() => {
    // Enfocamos el H1 al montar el layout para accesibilidad básica.
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  return (
    <div className="app-shell">
      {/* [Layout] Cabecera fija con navegación principal */}
      <header className="app-header">
        <div className="header-inner">
          <Link className="logo-link" to="/">
            Laboratorio React Router
          </Link>

          {/* Navegación principal hacia secciones comunes */}
          <nav aria-label="Navegación principal">
            <ul className="nav-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    if (isActive) {
                      return 'nav-link nav-link-active';
                    }

                    return 'nav-link';
                  }}
                  aria-current={({ isActive }) => {
                    if (isActive) {
                      return 'page';
                    }

                    return undefined;
                  }}
                >
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/docs/link-basic"
                  className={({ isActive }) => {
                    if (isActive) {
                      return 'nav-link nav-link-active';
                    }

                    return 'nav-link';
                  }}
                >
                  Ver demo ejemplo
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="app-main" aria-live="polite">
        {/* Encabezado invisible del layout para foco inicial */}
        <h1 ref={headingRef} tabIndex={-1} className="visually-hidden">
          Laboratorio React Router
        </h1>
        <Outlet />
      </main>

      <footer className="app-footer">
        <p>
          Proyecto pensado como guía práctica. Todo el contenido es local y
          funciona offline.
        </p>
      </footer>

      {/* Restauramos el scroll al navegar entre páginas */}
      <ScrollRestoration />
    </div>
  );
}

export default RootLayout;
