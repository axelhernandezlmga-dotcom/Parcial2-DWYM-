// Demostración 11: experiencia de usuario con restauración de scroll y foco.
// Mostramos cómo usar useLocation para enfocar el título y llevar el scroll arriba.

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function ScrollFocusDemo() {
  const headingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // [DEMO: UX/scroll] — Contenido extenso para notar el scroll.
  const paragraphs = Array.from({ length: 6 }).map((_, index) => {
    const paragraphNumber = index + 1;
    return (
      <p key={paragraphNumber}>
        Bloque {paragraphNumber}. Este texto simula una sección larga. Cambia de
        ruta y vuelve para observar cómo el foco cae en el título y el scroll se
        reinicia.
      </p>
    );
  });

  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Foco y scroll agradables
      </h1>

      <p>
        Cuando regreses desde otra demo, notarás que el título obtiene foco y el
        scroll vuelve a la parte superior. Esto mejora la experiencia con teclado
        y lectores de pantalla.
      </p>

      <Link to="/demos/link-basic" className="demo-button">
        Probar navegando a otra demo
      </Link>

      <div className="demo-card long-content">{paragraphs}</div>
    </section>
  );
}

export default ScrollFocusDemo;
