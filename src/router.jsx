// Definición del router con todas las rutas y loaders de las demos.

import {
  createBrowserRouter,
  defer,
  redirect,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import ErrorBoundary from './pages/ErrorBoundary.jsx';
import DocPage from './pages/docs/DocPage.jsx';
import LinkBasicDemo from './demos/LinkBasicDemo.jsx';
import ImperativeNavigationDemo from './demos/ImperativeNavigationDemo.jsx';
import ParamsLayoutDemo from './demos/ParamsLayoutDemo.jsx';
import PlanetDetail from './demos/PlanetDetail.jsx';
import QueryStringDemo from './demos/QueryStringDemo.jsx';
import DataRouterDemo from './demos/DataRouterDemo.jsx';
import FormStatusDemo from './demos/FormStatusDemo.jsx';
import ErrorBoundaryDemo from './demos/ErrorBoundaryDemo.jsx';
import NotFoundRedirectDemo from './demos/NotFoundRedirectDemo.jsx';
import ProtectedAreaDemo from './demos/ProtectedAreaDemo.jsx';
import ScrollFocusDemo from './demos/ScrollFocusDemo.jsx';
import BreadcrumbsDemo from './demos/BreadcrumbsDemo.jsx';
import BreadcrumbTopic from './demos/BreadcrumbTopic.jsx';
import OutletContextDemo from './demos/OutletContextDemo.jsx';
import OutletContextChild from './demos/OutletContextChild.jsx';
import RevalidationDemo from './demos/RevalidationDemo.jsx';
import DeferredDemo from './demos/DeferredDemo.jsx';
import LoginPage from './pages/Login.jsx';
import { demosCatalog, demoCategories, getDemoById } from './data/demosCatalog.js';
import {
  getPlanets,
  getPlanetById,
  getNotes,
  createNote,
  getAuthStatus,
  login,
  logout,
  getBreadcrumbTopics,
  getBreadcrumbTopicById,
  getVisitorCount,
  incrementVisitorCount,
  getDeferredMessage,
} from './data/mockDB.js';

function homeLoader() {
  return {
    demos: demosCatalog,
    categories: demoCategories,
  };
}

function docLoader({ params }) {
  const demo = getDemoById(params.demoId);

  if (!demo) {
    throw new Response('No encontramos la demo solicitada.', {
      status: 404,
    });
  }

  const doc = {
    title: demo.title,
    ...demo.docs,
  };

  return { doc };
}

async function paramsLoader() {
  const planets = await getPlanets();
  return { planets };
}

async function planetLoader({ params }) {
  const planet = await getPlanetById(params.planetId);
  return { planet };
}

async function dataRouterLoader({ request }) {
  const notes = await getNotes();
  const url = new URL(request.url);
  const created = url.searchParams.get('created');
  const createdMessage = created ? decodeURIComponent(created) : '';
  return { notes, createdMessage };
}

async function dataRouterAction({ request }) {
  const formData = await request.formData();
  const title = (formData.get('title') || '').trim();
  const body = (formData.get('body') || '').trim();

  if (!title || !body) {
    return { errorMessage: 'Completa todos los campos antes de guardar.' };
  }

  await createNote({ title, body });
  const message = encodeURIComponent('Nota creada con éxito.');
  throw redirect(`/demos/data-router?created=${message}`);
}

async function formStatusAction({ request }) {
  const formData = await request.formData();
  const name = (formData.get('name') || '').trim();
  const email = (formData.get('email') || '').trim();

  await new Promise((resolve) => {
    setTimeout(resolve, 600);
  });

  if (!name || !email) {
    return {
      successMessage: 'Completa nombre y correo para recibir novedades.',
    };
  }

  return {
    successMessage: `¡Gracias ${name}! Confirmaremos en ${email}.`,
  };
}

function errorBoundaryLoader({ request }) {
  const url = new URL(request.url);
  const mode = url.searchParams.get('mode');

  if (mode === 'fail') {
    throw new Response('Fallo simulado desde el loader.', {
      status: 500,
      statusText: 'Error controlado',
    });
  }

  return {
    message: 'Todo salió bien. Cambia la query a ?mode=fail para ver el error.',
  };
}

function redirectDemoLoader({ request }) {
  const url = new URL(request.url);
  const forceRedirect = url.searchParams.get('forceRedirect');

  if (forceRedirect === 'true') {
    throw redirect('/demos/link-basic');
  }

  return {
    redirectMessage: 'Usa los botones para probar el 404 y las redirecciones.',
  };
}

async function protectedLoader({ request }) {
  const authStatus = await getAuthStatus();

  if (!authStatus.loggedIn) {
    const url = new URL(request.url);
    const target = `${url.pathname}${url.search}`;
    throw redirect(`/login?from=${encodeURIComponent(target)}`);
  }

  return {
    authInfo: {
      message: 'Autenticación exitosa. Estás dentro de la zona privada.',
    },
  };
}

async function protectedAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'logout') {
    await logout();
    throw redirect('/login');
  }

  return null;
}

async function loginLoader({ request }) {
  const authStatus = await getAuthStatus();
  const url = new URL(request.url);
  const from = url.searchParams.get('from') || '/';

  if (authStatus.loggedIn) {
    throw redirect(from);
  }

  return null;
}

async function loginAction({ request }) {
  const formData = await request.formData();
  const username = (formData.get('username') || '').trim();
  const url = new URL(request.url);
  const from = url.searchParams.get('from') || '/';

  if (!username) {
    return { errorMessage: 'Ingresa un nombre para continuar.' };
  }

  await login();
  throw redirect(from);
}

async function breadcrumbsLoader() {
  const topics = await getBreadcrumbTopics();
  return { topics };
}

async function breadcrumbTopicLoader({ params }) {
  const topic = await getBreadcrumbTopicById(params.topicId);
  return { topic };
}

async function revalidationLoader() {
  const response = await getVisitorCount();
  return { visitorCount: response.count };
}

async function revalidationAction({ request }) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'add') {
    await incrementVisitorCount();
    return { updated: true };
  }

  return { updated: false };
}

function deferLoader() {
  return defer({
    slowMessage: getDeferredMessage(),
  });
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: 'docs/:demoId',
        loader: docLoader,
        element: <DocPage />,
      },
      {
        path: 'demos/link-basic',
        element: <LinkBasicDemo />,
      },
      {
        path: 'demos/use-navigate',
        element: <ImperativeNavigationDemo />,
      },
      {
        path: 'demos/params',
        loader: paramsLoader,
        element: <ParamsLayoutDemo />,
        children: [
          {
            index: true,
            element: (
              <article>
                <h2 className="demo-subtitle">Selecciona un planeta</h2>
                <p>El detalle aparecerá aquí.</p>
              </article>
            ),
          },
          {
            path: ':planetId',
            loader: planetLoader,
            element: <PlanetDetail />,
          },
        ],
      },
      {
        path: 'demos/query-string',
        element: <QueryStringDemo />,
      },
      {
        path: 'demos/data-router',
        loader: dataRouterLoader,
        action: dataRouterAction,
        element: <DataRouterDemo />,
      },
      {
        path: 'demos/forms',
        action: formStatusAction,
        element: <FormStatusDemo />,
      },
      {
        path: 'demos/error-boundary',
        loader: errorBoundaryLoader,
        element: <ErrorBoundaryDemo />,
      },
      {
        path: 'demos/not-found-redirect',
        loader: redirectDemoLoader,
        element: <NotFoundRedirectDemo />,
      },
      {
        path: 'demos/lazy',
        lazy: async () => {
          const module = await import('./demos/LazyLoadedDemo.jsx');
          return { Component: module.default };
        },
      },
      {
        path: 'demos/protected',
        loader: protectedLoader,
        action: protectedAction,
        element: <ProtectedAreaDemo />,
      },
      {
        path: 'demos/ux-focus-scroll',
        element: <ScrollFocusDemo />,
      },
      {
        path: 'demos/breadcrumbs',
        loader: breadcrumbsLoader,
        element: <BreadcrumbsDemo />,
        handle: {
          breadcrumb: {
            label: 'Breadcrumbs',
            href: '/demos/breadcrumbs',
          },
        },
        children: [
          {
            index: true,
            element: (
              <article className="demo-card">
                <p>Elige un tema para ver su detalle.</p>
              </article>
            ),
          },
          {
            path: ':topicId',
            loader: breadcrumbTopicLoader,
            element: <BreadcrumbTopic />,
            handle: {
              breadcrumb: (match) => {
                const topicData = match.data ? match.data.topic : null;
                const label = topicData ? topicData.title : match.params.topicId;
                return {
                  label,
                  href: `/demos/breadcrumbs/${match.params.topicId}`,
                };
              },
            },
          },
        ],
      },
      {
        path: 'demos/outlet-context',
        element: <OutletContextDemo />,
        children: [
          {
            index: true,
            element: <OutletContextChild />,
          },
        ],
      },
      {
        path: 'demos/revalidation',
        loader: revalidationLoader,
        action: revalidationAction,
        element: <RevalidationDemo />,
      },
      {
        path: 'demos/defer',
        loader: deferLoader,
        element: <DeferredDemo />,
      },
      {
        path: 'login',
        loader: loginLoader,
        action: loginAction,
        element: <LoginPage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
