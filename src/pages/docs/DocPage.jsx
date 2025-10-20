// Vista de documentación por demo. Muestra archivos implicados, marcadores
// de búsqueda y fragmentos esenciales.

import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

function DocPage() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const doc = loaderData.doc;
  const [copyMessage, setCopyMessage] = useState('');

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  function handleCopyTag(tag) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(tag)
        .then(() => {
          setCopyMessage(`Etiqueta ${tag} copiada. Pégala en tu editor.`);
        })
        .catch(() => {
          setCopyMessage('No se pudo copiar automáticamente, copia manualmente.');
        });
    } else {
      setCopyMessage('Clipboard no disponible en este navegador.');
    }
  }

  const fileSections = doc.files.map((file) => {
    const markerItems = file.markers.map((marker) => {
      return (
        <li key={marker.tag}>
          <code>{marker.tag}</code>
          <span> — {marker.description}</span>
          <button
            type="button"
            className="demo-button demo-button-small"
            onClick={() => {
              handleCopyTag(marker.tag);
            }}
          >
            Copiar etiqueta
          </button>
        </li>
      );
    });

    return (
      <article key={file.path} className="doc-file">
        <h3>{file.path}</h3>
        <ul className="doc-marker-list">{markerItems}</ul>
      </article>
    );
  });

  const snippetBlocks = doc.snippets.map((snippet) => {
    return (
      <section key={snippet.title} className="doc-snippet">
        <h3>{snippet.title}</h3>
        <pre>
          <code>{snippet.code}</code>
        </pre>
      </section>
    );
  });

  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        {doc.title}
      </h1>

      <p>{doc.summary}</p>

      <div className="card-actions">
        <Link to={doc.route} className="demo-button">
          Abrir demo
        </Link>
      </div>

      {copyMessage ? <p className="demo-alert demo-alert-info">{copyMessage}</p> : null}

      <h2 className="demo-subtitle">Archivos y marcadores</h2>
      <div className="doc-files-grid">{fileSections}</div>

      <h2 className="demo-subtitle">Fragmentos clave</h2>
      {snippetBlocks}
    </section>
  );
}

export default DocPage;
