// Catálogo centralizado de demos. Incluye metadatos para la Home y para la
// página de documentación.

const demosCatalog = [
  {
    id: 'link-basic',
    title: 'Links y NavLink',
    route: '/demos/link-basic',
    categories: ['Navegación'],
    description: 'Comprende la navegación declarativa con Link y NavLink.',
    bullets: [
      'NavLink marca el enlace activo con aria-current.',
      'Link cambia la URL sin recargar la página.',
    ],
    docs: {
      route: '/demos/link-basic',
      summary: 'Uso de Link y NavLink para navegar entre vistas.',
      files: [
        {
          path: 'src/demos/LinkBasicDemo.jsx',
          markers: [
            {
              tag: '[DEMO: LINK_BASIC]',
              description: 'Sección principal con comentario pedagógico.',
            },
            {
              tag: '[DEMO: LINK_BASIC/nav]',
              description: 'Barra secundaria con NavLink activo.',
            },
            {
              tag: '[DEMO: LINK_BASIC/list]',
              description: 'Lista de enlaces declarativos.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'NavLink con clase activa',
          code: ` <NavLink
  to="/"
  className={({ isActive }) => {
    if (isActive) {
      return 'chip chip-active';
    }

    return 'chip';
  }}
>
  Ir al Home
</NavLink>`,
        },
      ],
    },
  },
  {
    id: 'use-navigate',
    title: 'useNavigate',
    route: '/demos/use-navigate',
    categories: ['Navegación'],
    description: 'Dispara redirecciones desde un manejador de eventos.',
    bullets: [
      'navigate(-1) vuelve al historial anterior.',
      'navigate("/docs/use-navigate") abre documentación.',
    ],
    docs: {
      route: '/demos/use-navigate',
      summary: 'Botones que llaman a navigate de forma imperativa.',
      files: [
        {
          path: 'src/demos/ImperativeNavigationDemo.jsx',
          markers: [
            {
              tag: '[DEMO: NAVIGATE]',
              description: 'Estructura general de la demo.',
            },
            {
              tag: '[DEMO: NAVIGATE/handler]',
              description: 'Función que usa navigate(-1).',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Navegación imperativa',
          code: `function handleGoHome() {
  navigate(-1);
}`,
        },
      ],
    },
  },
  {
    id: 'params',
    title: 'Parámetros y rutas anidadas',
    route: '/demos/params',
    categories: ['Navegación'],
    description: 'Lee useParams y carga datos en rutas hijas.',
    bullets: [
      'Loader padre obtiene planetas.',
      'Outlet renderiza detalle según la URL.',
    ],
    docs: {
      route: '/demos/params',
      summary: 'Ruta padre con Outlet y ruta hija que usa useParams.',
      files: [
        {
          path: 'src/demos/ParamsLayoutDemo.jsx',
          markers: [
            {
              tag: '[DEMO: PARAMS]',
              description: 'Lista de planetas con enlaces.',
            },
            {
              tag: '[DEMO: PARAMS/outlet]',
              description: 'Contenedor del Outlet.',
            },
          ],
        },
        {
          path: 'src/demos/PlanetDetail.jsx',
          markers: [
            {
              tag: '[DEMO: PARAMS/detail]',
              description: 'Contenido basado en useParams.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'useParams en la ruta hija',
          code: `const params = useParams();
const loaderData = useLoaderData();
const planet = loaderData.planet;`,
        },
      ],
    },
  },
  {
    id: 'query-string',
    title: 'Query string',
    route: '/demos/query-string',
    categories: ['Navegación'],
    description: 'Sincroniza un filtro con URLSearchParams.',
    bullets: [
      'useSearchParams lee y escribe parámetros.',
      'URL se mantiene sincronizada con el filtro.',
    ],
    docs: {
      route: '/demos/query-string',
      summary: 'Filtro controlado que modifica la query string.',
      files: [
        {
          path: 'src/demos/QueryStringDemo.jsx',
          markers: [
            {
              tag: '[DEMO: QUERY]',
              description: 'Input que sincroniza la URL.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Actualizar search params',
          code: `const nextParams = new URLSearchParams(searchParams.toString());
nextParams.set('filter', value);
setSearchParams(nextParams);`,
        },
      ],
    },
  },
  {
    id: 'data-router',
    title: 'Loader + Action',
    route: '/demos/data-router',
    categories: ['Datos'],
    description: 'Combina loader, action, redirect y useActionData.',
    bullets: [
      'Loader trae notas iniciales.',
      'Action valida y redirige con redirect.',
    ],
    docs: {
      route: '/demos/data-router',
      summary: 'Notas gestionadas con loader/action y feedback de errores.',
      files: [
        {
          path: 'src/demos/DataRouterDemo.jsx',
          markers: [
            {
              tag: '[DEMO: DATA_ROUTER]',
              description: 'Formulario conectado al action.',
            },
            {
              tag: '[DEMO: DATA_ROUTER/list]',
              description: 'Listado renderizado desde el loader.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Validación en la action',
          code: `if (!title || !body) {
  return { errorMessage: 'Completa todos los campos.' };
}
await createNote({ title, body });
const message = encodeURIComponent('Nota creada con éxito.');
throw redirect(`/demos/data-router?created=${message}`);`,
        },
      ],
    },
  },
  {
    id: 'forms',
    title: 'Form + useNavigation',
    route: '/demos/forms',
    categories: ['Datos'],
    description: 'Detecta el estado de envío de un formulario.',
    bullets: [
      'Botón cambia de texto al enviar.',
      'Fieldset se deshabilita durante el submit.',
    ],
    docs: {
      route: '/demos/forms',
      summary: 'useNavigation expone el estado submitting.',
      files: [
        {
          path: 'src/demos/FormStatusDemo.jsx',
          markers: [
            {
              tag: '[DEMO: FORM/navigation]',
              description: 'Estado de envío consultado desde navigation.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Estado submitting',
          code: `const navigation = useNavigation();
const isSubmitting = navigation.state === 'submitting';`,
        },
      ],
    },
  },
  {
    id: 'error-boundary',
    title: 'Error boundaries',
    route: '/demos/error-boundary',
    categories: ['Datos'],
    description: 'Captura errores lanzados desde loaders.',
    bullets: [
      'Loader lanza Response cuando mode=fail.',
      'errorElement muestra mensaje amigable.',
    ],
    docs: {
      route: '/demos/error-boundary',
      summary: 'Provoca un error controlado para ver el boundary en acción.',
      files: [
        {
          path: 'src/demos/ErrorBoundaryDemo.jsx',
          markers: [
            {
              tag: '[DEMO: ERROR_BOUNDARY]',
              description: 'Instrucciones para provocar el error.',
            },
          ],
        },
        {
          path: 'src/pages/ErrorBoundary.jsx',
          markers: [
            {
              tag: '[DEMO: ERROR_BOUNDARY/global]',
              description: 'Renderiza mensajes según el tipo de error.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Lanzar Response',
          code: `if (mode === 'fail') {
  throw new Response('Fallo simulado desde el loader.', { status: 500 });
}`,
        },
      ],
    },
  },
  {
    id: 'not-found-redirect',
    title: '404 y redirects',
    route: '/demos/not-found-redirect',
    categories: ['Navegación'],
    description: 'Explora Navigate y redirect desde loader.',
    bullets: [
      'Link hacia ruta inexistente para ver 404.',
      'Botón que usa Navigate en el render.',
    ],
    docs: {
      route: '/demos/not-found-redirect',
      summary: 'Controla flujos de error y reenvío de rutas.',
      files: [
        {
          path: 'src/demos/NotFoundRedirectDemo.jsx',
          markers: [
            {
              tag: '[DEMO: REDIRECT]',
              description: 'Listado de acciones de prueba.',
            },
            {
              tag: '[DEMO: REDIRECT/navigate]',
              description: 'Uso de Navigate condicional.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Redirect desde loader',
          code: `if (forceRedirect === 'true') {
  throw redirect('/demos/link-basic');
}`,
        },
      ],
    },
  },
  {
    id: 'lazy',
    title: 'Lazy loading',
    route: '/demos/lazy',
    categories: ['Avanzado'],
    description: 'Carga diferida de módulos con lazy.',
    bullets: [
      'Ruta declarada con lazy() en router.',
      'Suspense muestra fallback durante la carga.',
    ],
    docs: {
      route: '/demos/lazy',
      summary: 'Importa el componente sólo cuando se visita la ruta.',
      files: [
        {
          path: 'src/demos/LazyLoadedDemo.jsx',
          markers: [
            {
              tag: '[DEMO: LAZY]',
              description: 'Contenido del componente perezoso.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'lazy en el router',
          code: `{
  path: 'demos/lazy',
  lazy: async () => {
    const module = await import('./demos/LazyLoadedDemo.jsx');
    return { Component: module.default };
  },
}`,
        },
      ],
    },
  },
  {
    id: 'protected',
    title: 'Rutas protegidas',
    route: '/demos/protected',
    categories: ['Datos'],
    description: 'Redirige a login cuando falta autenticación.',
    bullets: [
      'Loader revisa estado de auth en memoria.',
      'Action permite cerrar sesión.',
    ],
    docs: {
      route: '/demos/protected',
      summary: 'Flujo completo de login falso con redirect.',
      files: [
        {
          path: 'src/demos/ProtectedAreaDemo.jsx',
          markers: [
            {
              tag: '[DEMO: PROTECTED]',
              description: 'Vista privada tras pasar por el loader.',
            },
          ],
        },
        {
          path: 'src/pages/Login.jsx',
          markers: [
            {
              tag: '[DEMO: PROTECTED/login]',
              description: 'Formulario que dispara el action de login.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Redirect cuando no hay sesión',
          code: `if (!authStatus.loggedIn) {
  throw redirect('/login?from=/demos/protected');
}`,
        },
      ],
    },
  },
  {
    id: 'ux',
    title: 'Foco y scroll',
    route: '/demos/ux-focus-scroll',
    categories: ['UX'],
    description: 'Optimiza experiencia tras cada navegación.',
    bullets: [
      'Foco automático en el título.',
      'scrollTo reinicia la posición superior.',
    ],
    docs: {
      route: '/demos/ux-focus-scroll',
      summary: 'Patrones de accesibilidad con useLocation.',
      files: [
        {
          path: 'src/demos/ScrollFocusDemo.jsx',
          markers: [
            {
              tag: '[DEMO: UX/scroll]',
              description: 'Efecto que gestiona foco y scroll.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Enfocar y desplazar',
          code: `useEffect(() => {
  if (headingRef.current) {
    headingRef.current.focus();
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [location.pathname]);`,
        },
      ],
    },
  },
  {
    id: 'breadcrumbs',
    title: 'Breadcrumbs',
    route: '/demos/breadcrumbs',
    categories: ['UX'],
    description: 'Construye migas de pan con useMatches.',
    bullets: [
      'Cada ruta declara un handle con label.',
      'Lista de temas enlazados a rutas hijas.',
    ],
    docs: {
      route: '/demos/breadcrumbs',
      summary: 'Migas generadas automáticamente según la ruta activa.',
      files: [
        {
          path: 'src/demos/BreadcrumbsDemo.jsx',
          markers: [
            {
              tag: '[DEMO: BREADCRUMBS]',
              description: 'Construcción del breadcrumb.',
            },
          ],
        },
        {
          path: 'src/demos/BreadcrumbTopic.jsx',
          markers: [
            {
              tag: '[DEMO: BREADCRUMBS/topic]',
              description: 'Contenido de la ruta hija.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'useMatches filtrado',
          code: `const breadcrumbItems = matches
  .filter((match) => Boolean(match.handle && match.handle.breadcrumb))
  .map((match) => {
    const raw = match.handle.breadcrumb;
    return typeof raw === 'function' ? raw(match) : raw;
  });`,
        },
      ],
    },
  },
  {
    id: 'outlet-context',
    title: 'Outlet context',
    route: '/demos/outlet-context',
    categories: ['Datos'],
    description: 'Comparte estado del padre con hijos anidados.',
    bullets: [
      'Outlet recibe un objeto context.',
      'Hijo consume con useOutletContext.',
    ],
    docs: {
      route: '/demos/outlet-context',
      summary: 'Comunicación directa entre ruta padre e hija.',
      files: [
        {
          path: 'src/demos/OutletContextDemo.jsx',
          markers: [
            {
              tag: '[DEMO: OUTLET_CONTEXT]',
              description: 'Botón y paso de context.',
            },
          ],
        },
        {
          path: 'src/demos/OutletContextChild.jsx',
          markers: [
            {
              tag: '[DEMO: OUTLET_CONTEXT/child]',
              description: 'Lectura del context en la ruta hija.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Pasar context al Outlet',
          code: `<Outlet context={{ count }} />`,
        },
      ],
    },
  },
  {
    id: 'revalidation',
    title: 'Revalidación',
    route: '/demos/revalidation',
    categories: ['Datos'],
    description: 'Refresca datos tras una action con useRevalidator.',
    bullets: [
      'Loader trae contador de visitas.',
      'useRevalidator vuelve a ejecutar el loader.',
    ],
    docs: {
      route: '/demos/revalidation',
      summary: 'Actualiza datos sin salir de la misma ruta.',
      files: [
        {
          path: 'src/demos/RevalidationDemo.jsx',
          markers: [
            {
              tag: '[DEMO: REVALIDATE]',
              description: 'Formulario que dispara revalidación.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'useRevalidator en acción',
          code: `useEffect(() => {
  if (actionData?.updated) {
    revalidator.revalidate();
  }
}, [actionData, revalidator]);`,
        },
      ],
    },
  },
  {
    id: 'defer',
    title: 'defer + Await',
    route: '/demos/defer',
    categories: ['Avanzado'],
    description: 'Carga progresiva de datos lentos.',
    bullets: [
      'defer separa datos rápidos de lentos.',
      'Await muestra fallback dentro de Suspense.',
    ],
    docs: {
      route: '/demos/defer',
      summary: 'Promesa resuelta en segundo plano con Suspense.',
      files: [
        {
          path: 'src/demos/DeferredDemo.jsx',
          markers: [
            {
              tag: '[DEMO: DEFER]',
              description: 'Render del mensaje diferido.',
            },
          ],
        },
      ],
      snippets: [
        {
          title: 'Await con fallback',
          code: `<Suspense fallback={<p>Cargando…</p>}>
  <Await resolve={loaderData.slowMessage}>
    {(message) => <p>{message}</p>}
  </Await>
</Suspense>`,
        },
      ],
    },
  },
];

const demoCategories = ['Todas', 'Navegación', 'Datos', 'UX', 'Avanzado'];

function getDemoById(id) {
  return demosCatalog.find((demo) => {
    return demo.id === id;
  });
}

export { demosCatalog, demoCategories, getDemoById };
