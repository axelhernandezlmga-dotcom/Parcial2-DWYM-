// Demostración 1: enlaces declarativos con Link y NavLink.
// Muestra cómo navegar entre rutas sin recargar la página.

import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function LinkBasicDemo() {
  // Referencia para enfocar el título cada vez que abrimos la vista.
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: LINK_BASIC] — Estructura general del ejemplo con enlaces.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Enlaces declarativos
      </h1>

      <p>
        Esta demo enseña cómo los componentes <code>Link</code> y{' '}
        <code>NavLink</code> reemplazan etiquetas <code>&lt;a&gt;</code>.
        Permiten navegar sin recargar la página y conservan el estado de la
        aplicación.
      </p>

      {/* [DEMO: LINK_BASIC/nav] — Barra simple con NavLink para mostrar activo */}
      <nav aria-label="Ejemplo de navegación secundaria" className="demo-nav">
        <ul className="demo-nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => {
                if (isActive) {
                  return 'chip chip-active';
                }

                return 'chip';
              }}
              aria-current={({ isActive }) => {
                if (isActive) {
                  return 'page';
                }

                return undefined;
              }}
            >
              Ir al Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/docs/link-basic"
              className={({ isActive }) => {
                if (isActive) {
                  return 'chip chip-active';
                }

                return 'chip';
              }}
            >
              Ver documentación
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* [DEMO: LINK_BASIC/list] — Lista de rutas internas con Link */}
      <div className="demo-card">
        <h2 className="demo-subtitle">Rutas internas</h2>
        <p>
          Los enlaces siguientes navegan a otras demos de este laboratorio sin
          recargar la página completa.
        </p>
        <ul className="demo-link-list">
          <li>
            <Link to="/demos/use-navigate">Navegación imperativa</Link>
          </li>
          <li>
            <Link to="/demos/query-string">Query string</Link>
          </li>
          <li>
            <Link to="/demos/protected">Ruta protegida</Link>
          </li>
        </ul>
      </div>

      <p>
        Consejo: si inspeccionas estos enlaces en las herramientas de
        desarrollador verás que son etiquetas <code>&lt;a&gt;</code> normales.
        La diferencia es que React Router intercepta el click y actualiza la
        URL desde JavaScript.
      </p>
    </section>
  );
}

export default LinkBasicDemo;
