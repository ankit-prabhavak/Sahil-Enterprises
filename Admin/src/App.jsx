import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import { createContext } from "react";

const MyContext = createContext();

function App() {

  const [isSidebarOpen, setIsSidebarOpen ] = React.useState(true);
  
  
   
  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
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
