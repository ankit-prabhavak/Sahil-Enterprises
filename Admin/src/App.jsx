import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import { createContext } from "react";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Products from "./Pages/Products";

const MyContext = createContext();

function App() {

  const [isSidebarOpen, setIsSidebarOpen ] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  
  
  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLoggedIn,
    setIsLoggedIn,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[20%]' : 'w-0 opacity-0'} transition-all`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? 'w-full pl-8' : 'w-[80%]'} transition-all`}>

                <Dashboard />

              </div>

            </div>
          </section>
        </>
      ),
    },
    {
      path:'/login',
      element: (
        <>
          <Login/>
        </>
      )

    },
    {
      path: '/signUp',
      element: (
        <>
          <SignUp />
        </>
      )
    },
    {
      path: "/products",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? 'w-[20%]' : 'w-0 opacity-0'} transition-all`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? 'w-full pl-8' : 'w-[80%]'} transition-all`}>

                <Products />

              </div>

            </div>
          </section>
        </>
      ),
    },
  ]);

  return (
    <>
      <MyContext value={values}>
          <RouterProvider router={router} />
      </MyContext>
    </>
  );
}

export default App;
export { MyContext };
