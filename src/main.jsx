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
import QueryDetails from './Pages/QueryDetails';
import UpdateQuery from './Pages/UpdateQuery';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/queries',
        element: <Queries></Queries>
      },
      {
        path: '/recommendationsforme',
        element: <RecommendationsForMe></RecommendationsForMe>
      },
      {
        path: '/myqueries',
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
      },
      {
        path: '/myrecommendations',
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addquery',
        element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>
      },
      {
        path: '/querydetails/:id',
        element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allquery/${params.id}`,{credentials:'include'})
      },
      {
        path:'/queryupdate/:id',
        element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/allquery/${params.id}`,{credentials:'include'})
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
