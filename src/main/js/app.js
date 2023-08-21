const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const PageHome = require('./pages/home');

const PageNuevoDirector = require("./pages/nuevo-director");
const PageVerDirector = require("./pages/ver-director");
const PageEditarDirector = require("./pages/editar-director");

const PageNuevoGenero = require("./pages/nuevo-genero");
const PageVerGenero = require("./pages/ver-genero");
const PageEditarGenero = require("./pages/editar-genero");

const PageNuevaPelicula = require("./pages/nueva-pelicula");
const PageVerPelicula = require("./pages/ver-pelicula");


const router = createBrowserRouter([
    { path: "/", element: <PageHome /> },

    { path: "/nuevo-director", element: <PageNuevoDirector /> },
    { path: "/ver-director/:id", element: <PageVerDirector /> },
    { path: "/editar-director/:id", element: <PageEditarDirector /> },

    { path: "/nuevo-genero", element: <PageNuevoGenero /> },
    { path: "/ver-genero/:id", element: <PageVerGenero /> },
    { path: "/editar-genero/:id", element: <PageEditarGenero /> },
    
    { path: "/nueva-pelicula", element: <PageNuevaPelicula /> },
    { path: "/ver-pelicula/:id", element: <PageVerPelicula /> },
]);


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react')
)
