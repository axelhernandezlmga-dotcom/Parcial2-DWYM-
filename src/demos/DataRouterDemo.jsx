// Demostración 5: data routers con loader y action.
// El loader obtiene notas y la action crea nuevas entradas con redirect.

import { Form, useActionData, useLoaderData } from 'react-router-dom';
import { useEffect, useMemo, useRef } from 'react';

function DataRouterDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const notes = loaderData.notes;
  const createdMessage = loaderData.createdMessage;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const noteItems = useMemo(() => {
    return notes.map((note) => {
      // [DEMO: DATA_ROUTER/list] — Renderizamos notas obtenidas por loader.
      return (
        <li key={note.id} className="demo-note">
          <strong>{note.title}</strong>
          <p>{note.body}</p>
        </li>
      );
    });
  }, [notes]);

  const hasError = Boolean(actionData && actionData.errorMessage);

  // [DEMO: DATA_ROUTER] — Formulario conectado a loader/action.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Loader + Action trabajando juntos
      </h1>

      <p>
        Esta pantalla carga notas desde el loader. Al enviar el formulario, la
        <code>action</code> valida los campos, crea la nota y redirige. Si falta
        información, usamos <code>useActionData</code> para mostrar errores.
      </p>

      {createdMessage ? (
        <div className="demo-alert demo-alert-success">
          {createdMessage}
        </div>
      ) : null}

      {hasError ? (
        <div className="demo-alert demo-alert-error">
          {actionData.errorMessage}
        </div>
      ) : null}

      <Form method="post" className="demo-form">
        <fieldset>
          <legend>Crear nueva nota</legend>
          <label className="demo-label" htmlFor="titleInput">
            Título
          </label>
          <input
            id="titleInput"
            name="title"
            className="demo-input"
            placeholder="Ej: Recordar redirect"
          />

          <label className="demo-label" htmlFor="bodyInput">
            Descripción
          </label>
          <textarea
            id="bodyInput"
            name="body"
            className="demo-textarea"
            rows={3}
          />
        </fieldset>
        <button type="submit" className="demo-button">
          Guardar nota
        </button>
      </Form>

      <h2 className="demo-subtitle">Notas guardadas</h2>
      <ul className="demo-note-list">{noteItems}</ul>
    </section>
  );
}

export default DataRouterDemo;
