// Simulador de base de datos local con Promesas y retardos controlados.
// Cada función devuelve datos después de un pequeño setTimeout para imitar
// una petición HTTP real.

const delay = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, 400);
  });
};

const planets = [
  { id: 'mercurio', name: 'Mercurio', description: 'Planeta más cercano al sol.' },
  { id: 'venus', name: 'Venus', description: 'Planeta de atmósfera densa.' },
  { id: 'tierra', name: 'Tierra', description: 'Nuestro hogar azul.' },
];

let notes = [
  { id: 1, title: 'Aprender loaders', body: 'Los loaders cargan datos antes de renderizar.' },
  { id: 2, title: 'Actions', body: 'Las actions gestionan envíos de formularios.' },
];

let isLoggedIn = false;

let visitorCounter = 8;

const breadcrumbTopics = [
  { id: 'introduccion', title: 'Introducción', description: 'Cómo planear rutas.' },
  { id: 'loaders', title: 'Loaders', description: 'Pre-carga de datos en rutas.' },
  { id: 'actions', title: 'Actions', description: 'Procesar formularios declarativos.' },
];

function getPlanets() {
  return delay([...planets]);
}

function getPlanetById(id) {
  const planet = planets.find((item) => {
    return item.id === id;
  });

  if (!planet) {
    return delay(null);
  }

  return delay({ ...planet });
}

function getNotes() {
  return delay(notes.map((note) => {
    return { ...note };
  }));
}

function createNote(newNote) {
  const nextId = notes.length + 1;
  const noteToSave = { id: nextId, ...newNote };
  notes = [...notes, noteToSave];
  return delay(noteToSave);
}

function clearNotes() {
  notes = [];
  return delay([]);
}

function login() {
  isLoggedIn = true;
  return delay({ status: 'ok' });
}

function logout() {
  isLoggedIn = false;
  return delay({ status: 'ok' });
}

function getAuthStatus() {
  return delay({ loggedIn: isLoggedIn });
}

function getVisitorCount() {
  return delay({ count: visitorCounter });
}

function incrementVisitorCount() {
  visitorCounter += 1;
  return delay({ count: visitorCounter });
}

function getBreadcrumbTopics() {
  return delay(breadcrumbTopics.map((topic) => {
    return { ...topic };
  }));
}

function getBreadcrumbTopicById(id) {
  const topic = breadcrumbTopics.find((item) => {
    return item.id === id;
  });

  if (!topic) {
    return delay(null);
  }

  return delay({ ...topic });
}

function getDeferredMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Mensaje entregado después de 2 segundos.');
    }, 2000);
  });
}

export {
  getPlanets,
  getPlanetById,
  getNotes,
  createNote,
  clearNotes,
  login,
  logout,
  getAuthStatus,
  getVisitorCount,
  incrementVisitorCount,
  getBreadcrumbTopics,
  getBreadcrumbTopicById,
  getDeferredMessage,
};
