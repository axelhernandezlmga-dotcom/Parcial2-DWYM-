// Demostración 4: lectura y escritura de query string con URLSearchParams.

import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function QueryStringDemo() {
  const headingRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  const filter = searchParams.get('filter') || '';

  const courses = useMemo(() => {
    return [
      { id: 1, name: 'Loader avanzado' },
      { id: 2, name: 'Formularios con action' },
      { id: 3, name: 'Outlet context' },
      { id: 4, name: 'useMatches' },
    ];
  }, []);

  const filteredCourses = courses.filter((course) => {
    if (!filter) {
      return true;
    }

    return course.name.toLowerCase().includes(filter.toLowerCase());
  });

  const courseItems = filteredCourses.map((course) => {
    return (
      <li key={course.id} className="demo-list-item">
        {course.name}
      </li>
    );
  });

  function handleFilterChange(event) {
    const value = event.target.value;
    const nextParams = new URLSearchParams(searchParams.toString());

    if (value) {
      nextParams.set('filter', value);
    } else {
      nextParams.delete('filter');
    }

    setSearchParams(nextParams);
  }

  // [DEMO: QUERY] — input que modifica la URL.
  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Filtros con query string
      </h1>

      <p>
        Al escribir en el campo de texto actualizamos la URL con{' '}
        <code>setSearchParams</code>. También leemos el valor actual para filtrar
        los elementos renderizados.
      </p>

      <label className="demo-label" htmlFor="filterInput">
        Texto a buscar
      </label>
      <input
        id="filterInput"
        value={filter}
        onChange={handleFilterChange}
        className="demo-input"
        placeholder="Escribe por ejemplo loader"
      />

      <h2 className="demo-subtitle">Cursos disponibles</h2>
      <ul className="demo-simple-list">{courseItems}</ul>
    </section>
  );
}

export default QueryStringDemo;
