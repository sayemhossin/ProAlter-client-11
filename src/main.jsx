import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Routes/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Components/AuthProvider';
import Queries from './Pages/Queries';
import RecommendationsForMe from './Pages/RecommendationsForMe';
import MyQueries from './Pages/MyQueries';
import MyRecommendations from './Pages/MyRecommendations';
import Error from './Pages/Error';
import AddQuery from './Pages/AddQuery';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/queries',
        element:<Queries></Queries>
      },
      {
        path:'/recommendationsforme',
        element:<RecommendationsForMe></RecommendationsForMe>
      },
      {
        path:'/myqueries',
        element:<MyQueries></MyQueries>
      },
      {
        path:'/myrecommendations',
        element:<MyRecommendations></MyRecommendations>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/addquery',
        element:<AddQuery></AddQuery>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
