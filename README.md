# Laboratorio React Router

Proyecto pedagógico creado con Vite + React Router 6.22. Presenta un catálogo
de demos guiadas para aprender las funcionalidades esenciales y algunas
avanzadas del enrutador de React. Cada demo tiene comentarios con marcadores
`[DEMO: ...]` para localizar rápidamente el código relevante.

## Requisitos previos

- Node.js 20 (incluido en `.nvmrc`).
- npm 9+.

## Puesta en marcha

```bash
npm install
npm run dev
```

Visita `http://localhost:5173` y explora el catálogo desde la página “Laboratorio
React Router”.

### Otros scripts

| Comando          | Descripción                                        |
| ---------------- | -------------------------------------------------- |
| `npm run build`  | Genera la versión de producción en `dist/`.        |
| `npm run preview`| Sirve la carpeta `dist/` para pruebas locales.     |
| `npm run lint`   | Ejecuta ESLint con reglas amigables para novatos.  |
| `npm run test`   | Lanza Vitest (plantilla disponible para ampliar).  |

## Cómo usar los marcadores `[DEMO: ...]`

Cada bloque importante del código tiene un comentario con el patrón
`// [DEMO: IDENTIFICADOR]`. En tu editor busca la etiqueta para saltar directo al
fragmento descrito en la documentación de la demo.

Ejemplo: busca `[DEMO: DATA_ROUTER]` para ubicar el formulario que dispara la
`action` en la demo de loaders y actions.

## Tabla de demos

| Demo | Ruta | Categoría principal | Qué aprenderás |
| ---- | ---- | ------------------- | -------------- |
| Links y NavLink | `/demos/link-basic` | Navegación | Navegación declarativa con estado activo. |
| useNavigate | `/demos/use-navigate` | Navegación | Redirecciones imperativas desde handlers. |
| Parámetros y rutas anidadas | `/demos/params` | Navegación | Uso de loaders, `<Outlet>` y `useParams`. |
| Query string | `/demos/query-string` | Navegación | Sincroniza filtros con `URLSearchParams`. |
| Loader + Action | `/demos/data-router` | Datos | `useLoaderData`, `useActionData` y `redirect`. |
| Form + useNavigation | `/demos/forms` | Datos | Estado `submitting` y deshabilitar campos. |
| Error boundaries | `/demos/error-boundary` | Datos | `errorElement` y lanzamiento de `Response`. |
| 404 y redirects | `/demos/not-found-redirect` | Navegación | `Navigate` y redirecciones desde loader. |
| Lazy loading | `/demos/lazy` | Avanzado | Rutas cargadas bajo demanda con `lazy`. |
| Rutas protegidas | `/demos/protected` | Datos | Redirecciones a `/login` y acciones de logout. |
| Foco y scroll | `/demos/ux-focus-scroll` | UX | Restaurar foco y posición al navegar. |
| Breadcrumbs | `/demos/breadcrumbs` | UX | `useMatches` y handles personalizados. |
| Outlet context | `/demos/outlet-context` | Datos | Compartir estado padre-hijo con `Outlet`. |
| Revalidación | `/demos/revalidation` | Datos | `useRevalidator` tras ejecutar una action. |
| defer + Await | `/demos/defer` | Avanzado | Carga progresiva y `Suspense` local. |

## Consejos de lectura

1. Empieza con “Links y NavLink” para entender la navegación básica.
2. Sigue con “useNavigate” y “Parámetros y rutas anidadas”.
3. Avanza a las demos de datos (`Loader + Action`, `Form + useNavigation`).
4. Explora las secciones de UX y cierra con las avanzadas (`Lazy`, `defer`).

En cada demo abre el botón “Ver código” para estudiar los archivos listados y
sus marcadores. Copia la etiqueta con el botón “Copiar etiqueta” para pegarla en
la búsqueda de tu editor.

## Estructura relevante

```
src/
├─ router.jsx                # Definición central de rutas, loaders y actions.
├─ layouts/RootLayout.jsx    # Layout con navegación, footer y ScrollRestoration.
├─ pages/                    # Home, Login, 404 y error boundary.
├─ pages/docs/DocPage.jsx    # Vista “Ver código”.
├─ demos/                    # 1 componente por demo, con comentarios didácticos.
├─ data/demosCatalog.js      # Metadatos usados por Home y docs.
├─ data/mockDB.js            # Simulaciones async para loaders y actions.
└─ styles.css                # Estilos sencillos y reutilizables.
```

¡Feliz aprendizaje! Cualquier demo puede servirte como punto de partida para
proyectos más grandes.
