import React from 'react'
import ReactDOM from 'react-dom/client'
import PokemonMain from './routes/PokemonMain'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PokemonDetail, {loader as PokemonDetailLoader} from './routes/PokemonDetail'
import RootRayout from './routes/RootRayout'
import NotFoundPokemon from './routes/NotFoundPokemon'

const router = createBrowserRouter([
  {
    path: '/', element: <RootRayout></RootRayout>, children: [
      {
        path: '/',
        element: <PokemonMain></PokemonMain>,
        children: [
          {
            path: '/:pokemonId',
            element: <PokemonDetail></PokemonDetail>,
            loader: PokemonDetailLoader,
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
