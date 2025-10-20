// Página principal del laboratorio. Muestra el catálogo de demos con buscador
// y filtros por categoría.

import { Link, useLoaderData } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';

function Home() {
  const headingRef = useRef(null);
  const loaderData = useLoaderData();
  const demos = loaderData.demos;
  const categories = loaderData.categories;

  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todas');

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.focus();
    }
  }, []);

  function handleCategoryClick(category) {
    setActiveCategory(category);
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredDemos = useMemo(() => {
    return demos.filter((demo) => {
      const matchesCategory =
        activeCategory === 'Todas' || demo.categories.includes(activeCategory);
      const normalizedTerm = searchTerm.trim().toLowerCase();

      if (!matchesCategory) {
        return false;
      }

      if (!normalizedTerm) {
        return true;
      }

      const titleMatches = demo.title.toLowerCase().includes(normalizedTerm);
      const descriptionMatches = demo.description
        .toLowerCase()
        .includes(normalizedTerm);
      const matchesText = titleMatches || descriptionMatches;

      return matchesText;
    });
  }, [demos, activeCategory, searchTerm]);

  const cards = filteredDemos.map((demo) => {
    const bulletItems = demo.bullets.map((bullet, index) => {
      return <li key={index}>{bullet}</li>;
    });

    return (
      <article key={demo.id} className="demo-card demo-card-home">
        <h2>{demo.title}</h2>
        <p>{demo.description}</p>
        <ul className="demo-bullet-list">{bulletItems}</ul>
        <div className="card-actions">
          <Link to={demo.route} className="demo-button">
            Abrir demo
          </Link>
          <Link to={`/docs/${demo.id}`} className="demo-button demo-button-secondary">
            Ver código
          </Link>
        </div>
      </article>
    );
  });

  const categoryButtons = categories.map((category) => {
    const isActive = category === activeCategory;
    const buttonClass = isActive ? 'chip chip-active' : 'chip';

    return (
      <button
        key={category}
        type="button"
        onClick={() => {
          handleCategoryClick(category);
        }}
        className={buttonClass}
      >
        {category}
      </button>
    );
  });

  return (
    <section className="demo-section">
      <h1 ref={headingRef} tabIndex={-1} className="demo-title">
        Laboratorio React Router
      </h1>

      <p>
        Aprende paso a paso. Usa el buscador para filtrar demos o explora por
        categoría. Haz click en “Ver código” para ir directo al archivo y sus
        marcadores.
      </p>

      <div className="filters">
        <label className="demo-label" htmlFor="searchInput">
          Buscar demos
        </label>
        <input
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          className="demo-input"
          placeholder="Ej: loader"
        />
        <div className="chip-row" role="group" aria-label="Categorías de demos">
          {categoryButtons}
        </div>
      </div>

      <div className="demo-grid-home">{cards}</div>
    </section>
  );
}

export default Home;
