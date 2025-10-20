// Demostración 3: rutas con parámetros dinámicos y Outlet para anidar vistas.
// La ruta padre lista planetas y la ruta hija muestra el detalle.

import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ParamsLayoutDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const planets = loaderData.planets;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const planetLinks = planets.map((planet) => {
    return (
      <li key={planet.id} className="demo-list-item">
        <Link to={planet.id} className="demo-link">
          {planet.name}
        </Link>
      </li>
    );
  });

  // [DEMO: PARAMS] — Presentamos enlaces a rutas hijas.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Rutas anidadas con parámetros
      </h1>

      <p>
        El loader de esta ruta padre obtiene una lista de planetas. Cada enlace
        lleva a una ruta hija que lee <code>useParams</code> para decidir qué
        información mostrar.
      </p>

      <div className="demo-grid">
        <div className="demo-card">
          <h2 className="demo-subtitle">Planetas disponibles</h2>
          <p>Haz click en un planeta para cargar su detalle.</p>
          <ul className="demo-simple-list">{planetLinks}</ul>
        </div>

        {/* [DEMO: PARAMS/outlet] — Aquí se renderiza la ruta hija con Outlet */}
        <div className="demo-card">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default ParamsLayoutDemo;
