// Ruta hija para breadcrumbs. Lee datos del loader y muestra el contenido.

import { useLoaderData } from 'react-router-dom';

function BreadcrumbTopic() {
  const loaderData = useLoaderData();
  const topic = loaderData.topic;

  if (!topic) {
    return <p>Selecciona un tema de la lista.</p>;
  }

  // [DEMO: BREADCRUMBS/topic] — Contenido específico del tema.
  return (
    <article className="demo-card">
      <h2 className="demo-subtitle">{topic.title}</h2>
      <p>{topic.description}</p>
    </article>
  );
}

export default BreadcrumbTopic;
