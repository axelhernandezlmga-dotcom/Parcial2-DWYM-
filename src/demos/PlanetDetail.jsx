// Vista hija para la demo de parámetros. Lee useParams y muestra el detalle.

import { useLoaderData, useParams } from 'react-router-dom';

function PlanetDetail() {
  const params = useParams();
  const loaderData = useLoaderData();
  const planet = loaderData.planet;

  if (!planet) {
    return (
      <div>
        <h2 className="demo-subtitle">Selecciona un planeta</h2>
        <p>No encontramos datos para el identificador: {params.planetId}</p>
      </div>
    );
  }

  // [DEMO: PARAMS/detail] — Mostramos datos basados en useParams.
  return (
    <div>
      <h2 className="demo-subtitle">{planet.name}</h2>
      <p>{planet.description}</p>
    </div>
  );
}

export default PlanetDetail;
