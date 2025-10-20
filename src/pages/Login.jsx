// Página de login ficticio usada por la demo de rutas protegidas.

import { Form, useActionData, useNavigation, useSearchParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function LoginPage() {
  const headingRef = useRef(null);
  const navigation = useNavigation();
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from') || '/';
  const isSubmitting = navigation.state === 'submitting';

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  // [DEMO: PROTECTED/login] — Formulario simple que llama al action de login.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Iniciar sesión
      </h1>

      <p>
        Esta pantalla simula un login. El action establece un flag en memoria y
        redirige a la ruta solicitada: <code>{from}</code>.
      </p>

      {actionData && actionData.errorMessage ? (
        <p className="demo-alert demo-alert-error">{actionData.errorMessage}</p>
      ) : null}

      <Form method="post" className="demo-form">
        <fieldset disabled={isSubmitting}>
          <legend>Accede al área privada</legend>
          <label className="demo-label" htmlFor="usernameInput">
            Usuario (puede ser cualquiera)
          </label>
          <input id="usernameInput" name="username" className="demo-input" />
        </fieldset>
        <button type="submit" className="demo-button">
          {isSubmitting ? 'Ingresando…' : 'Entrar'}
        </button>
      </Form>
    </section>
  );
}

export default LoginPage;
