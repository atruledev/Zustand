import React from "react";
import Todo from "./Todo";

import { createRoot } from "react-dom/client";
import { useAuth0 } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Auth/Home";
import "./index.css";
import Header from "./Header/Header";

const App = () => {
  const { isAuthenticated } = useAuth0();
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
  },
  {
    path: "/todo",
    element: (
    
      <>
        <Header />
        {isAuthenticated ? 
        <Todo /> : <Home/>}
      </>
    ),
  },
]);

return <RouterProvider router={router}  />;

}


export default App;
