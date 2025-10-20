// Demostración 6: formularios declarativos con <Form> y estado de envío.
// Mostramos cómo consultar useNavigation para indicar que algo se está enviando.

import { Form, useActionData, useNavigation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function FormStatusDemo() {
  const headingRef = useRef(null);
  const navigation = useNavigation();
  const actionData = useActionData();
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: FORM/navigation] — Indicamos estado de envío.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Formulario con estado de envío
      </h1>

      <p>
        El componente <code>Form</code> envía datos a la <code>action</code>
        de la ruta. Mientras el formulario está en progreso,{' '}
        <code>useNavigation</code> devuelve <code>state = 'submitting'</code>.
      </p>

      {actionData && actionData.successMessage ? (
        <div className="demo-alert demo-alert-success">
          {actionData.successMessage}
        </div>
      ) : null}

      <Form method="post" className="demo-form">
        <fieldset disabled={isSubmitting}>
          <legend>Suscribirse al boletín</legend>
          <label className="demo-label" htmlFor="nameInput">
            Tu nombre
          </label>
          <input id="nameInput" name="name" className="demo-input" />

          <label className="demo-label" htmlFor="emailInput">
            Correo electrónico
          </label>
          <input id="emailInput" name="email" className="demo-input" />
        </fieldset>
        <button type="submit" className="demo-button">
          {isSubmitting ? 'Enviando…' : 'Enviar'}
        </button>
      </Form>
    </section>
  );
}

export default FormStatusDemo;
