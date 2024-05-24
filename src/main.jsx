import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import PokemonMain from './routes/PokemonMain.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import PokemonDetail, {loader as PokemonDetailLoader} from './routes/PokemonDetail'
import RootRayout from './routes/RootRayout.jsx';
import NotFoundPokemon from './routes/NotFoundPokemon.jsx';

const PokemonDetail = lazy(() => import('./routes/PokemonDetail.jsx'));

const router = createBrowserRouter([
  {
    path: '/', element: <RootRayout></RootRayout>, children: [
      {
        path: '/',
        element: <PokemonMain></PokemonMain>,
        children: [
          {
            path: '/:pokemonId',
            element: <Suspense fallback={ <div>로딩중...</div> }><PokemonDetail></PokemonDetail></Suspense>,
            // loader: PokemonDetailLoader,
            loader: ({ params }) => import('./routes/PokemonDetail.jsx').then(module => module.loader({ params })),
          },
          {
            path: '/notFoundPokemon',
            element: <NotFoundPokemon></NotFoundPokemon>,
          }
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router }></RouterProvider>
  </React.StrictMode>,
)
