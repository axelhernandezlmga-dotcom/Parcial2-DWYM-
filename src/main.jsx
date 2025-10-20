// Archivo de entrada principal. Su único objetivo es arrancar la app
// y conectar el router de React Router con el árbol de React.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './styles.css';

function renderApplication() {
  // Creamos el contenedor raíz que Vite inyecta en index.html.
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('No se encontró el contenedor #root en index.html');
  }

  // React 18 usa createRoot para habilitar funcionalidades modernas.
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <RouterProvider
        router={router}
        fallbackElement={(
          <p className="demo-alert demo-alert-info">Cargando contenido…</p>
        )}
      />
    </React.StrictMode>,
  );
}

renderApplication();
