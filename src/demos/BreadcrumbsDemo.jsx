// Demostración 12: breadcrumbs con useMatches.
// Las rutas hijas declaran un handle con información de la miga de pan.

import { Link, Outlet, useLoaderData, useMatches } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';

function BreadcrumbsDemo() {
  const headingRef = useRef(null);
  const matches = useMatches();
  const loaderData = useLoaderData();
  const topics = loaderData.topics;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const breadcrumbItems = useMemo(() => {
    return matches
      .filter((match) => {
        return Boolean(match.handle && match.handle.breadcrumb);
      })
      .map((match) => {
        const handle = match.handle;
        const rawBreadcrumb = handle.breadcrumb;
        const breadcrumbInfo =
          typeof rawBreadcrumb === 'function' ? rawBreadcrumb(match) : rawBreadcrumb;

        if (breadcrumbInfo.href) {
          return (
            <li key={match.id}>
              <Link to={breadcrumbInfo.href} className="demo-link">
                {breadcrumbInfo.label}
              </Link>
            </li>
          );
        }

        return <li key={match.id}>{breadcrumbInfo.label}</li>;
      });
  }, [matches]);

  const topicLinks = topics.map((topic) => {
    return (
      <li key={topic.id}>
        <Link to={topic.id} className="demo-link">
          {topic.title}
        </Link>
      </li>
    );
  });

  // [DEMO: BREADCRUMBS] — Mostramos la ruta actual paso a paso.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Migas de pan con useMatches
      </h1>

      <p>
        Cada ruta puede declarar un <code>handle</code> con metadatos. Aquí lo
        usamos para construir un breadcrumb dinámico que responde a la URL.
      </p>

      <nav aria-label="Breadcrumb" className="demo-breadcrumbs">
        <ol>{breadcrumbItems}</ol>
      </nav>

      <div className="demo-card">
        <h2 className="demo-subtitle">Temas disponibles</h2>
        <ul className="demo-simple-list">{topicLinks}</ul>
      </div>

      <Outlet />
    </section>
  );
}

export default BreadcrumbsDemo;
