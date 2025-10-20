// Demostración 14: refrescar datos con useRevalidator.
// Tras enviar el formulario, revalidamos el loader para obtener el último valor.

import { Form, useActionData, useLoaderData, useRevalidator } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function RevalidationDemo() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const revalidator = useRevalidator();
  const visitorCount = loaderData.visitorCount;

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (actionData && actionData.updated) {
      revalidator.revalidate();
    }
  }, [actionData, revalidator]);

  // [DEMO: REVALIDATE] — Mostramos el número y ofrecemos un botón para actualizarlo.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Revalidación manual de datos
      </h1>

      <p>
        El loader trae un contador de visitas. Al enviar el formulario llamamos a
        una action que incrementa el contador y luego usamos{' '}
        <code>useRevalidator</code> para volver a ejecutar el loader.
      </p>

      <p className="demo-highlight">Visitas registradas: {visitorCount}</p>

      <Form method="post">
        <button type="submit" name="intent" value="add" className="demo-button">
          Sumar una visita
        </button>
      </Form>
    </section>
  );
}

export default RevalidationDemo;
