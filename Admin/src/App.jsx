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
import AddProduct from "./Pages/Products/addProduct";
import Users from "./Pages/Users";

// MUI imports for full screen dialog
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { IoMdClose } from "react-icons/io";
import Slide from "@mui/material/Slide";
import HomeSliderBanner from "./Pages/HomeSliderBanner";
import AddHomeSlide from "./Pages/HomeSliderBanner/addHomeSlide";
import AddAddress from "./Pages/Address/addAddress";
import CategoryList from "./Pages/CategoryList";
import AddCategory from "./Pages/CategoryList/addCategory";
import SubCategoryList from "./Pages/SubCategoryList";
import AddSubCategory from "./Pages/SubCategoryList/addSubCategory";
import Orders from "./Pages/Orders";
import ForgotPassword from "./Pages/ForgotPassword";
import VerifyAccount from "./Pages/VerifyAccount";
import ChangePassword from "./Pages/ChangePassword";

// Toast
import toast, { Toaster } from "react-hot-toast";
import Profile from "./Pages/Profile";

const MyContext = createContext();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState(null);

  const apiUrl = import.meta.env.VITE_APP_URL;

  const [isOpenFullScreenPanel, setIsOpenFullScreenPanel] = React.useState({
    open: false,
    model: "",
  });

  React.useEffect(() => {
  const checkAuth = async () => {
    console.log("Checking authentication...");
    const response = await fetchDataFromAPI("/api/user/user-details");

    if (response?.success) {
      setIsLoggedIn(true);
      setUserData(response.data);
    } else {
      setIsLoggedIn(false);
    }
  };

  checkAuth();
}, []);

  // alert box
  const openAlertBox = (status, message) => {
    if (status === "success") {
      toast.success(message);
    }

    if (status === "error") {
      toast.error(message);
    }
  };

  const values = {
    isSidebarOpen,
    setIsSidebarOpen,
    isLoggedIn,
    setIsLoggedIn,
    isOpenFullScreenPanel,
    setIsOpenFullScreenPanel,
    openAlertBox,
    userData,
    setUserData,
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signUp",
      element: (
        <>
          <SignUp />
        </>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <>
          <ForgotPassword />
        </>
      ),
    },
    {
      path: "/verify-account",
      element: (
        <>
          <VerifyAccount />
        </>
      ),
    },
    {
      path: "/change-password",
      element: (
        <>
          <ChangePassword />
        </>
      ),
    },
    {
      path: "/products",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <Products />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/homeSliderBanner/list",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <HomeSliderBanner />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/category/list",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <CategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/subCategory/list",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <SubCategoryList />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/orders",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <Orders />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/users",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <Users />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`overflow-hidden sidebarWrapper ${isSidebarOpen === true ? "w-[20%]" : "w-0 opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>
              <div
                className={`contentRight py-4 pr-8  ${isSidebarOpen === false ? "w-full pl-8" : "w-[80%]"} transition-all`}
              >
                <Profile />
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />

        <Dialog
          fullScreen
          open={isOpenFullScreenPanel.open}
          onClose={() => setIsOpenFullScreenPanel({ open: false, model: "" })}
          slots={{
            transition: Transition,
          }}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() =>
                  setIsOpenFullScreenPanel({ open: false, model: "" })
                }
                aria-label="close"
              >
                <IoMdClose className="text-gray-800" />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                <span className="text-gray-800">
                  {isOpenFullScreenPanel.model}
                </span>
              </Typography>
            </Toolbar>
          </AppBar>

          {isOpenFullScreenPanel.model === "Add Product" && <AddProduct />}

          {isOpenFullScreenPanel.model === "Add Home Slider Banner" && (
            <AddHomeSlide />
          )}

          {isOpenFullScreenPanel.model === "Add New Category" && (
            <AddCategory />
          )}

          {isOpenFullScreenPanel.model === "Add New Sub Category" && (
            <AddSubCategory />
          )}

          {isOpenFullScreenPanel.model === "Add New Address" && <AddAddress />}
        </Dialog>
      </MyContext.Provider>

      <Toaster
        toastOptions={{
          duration: 3000, // toast visible for 3 seconds
          style: {
            maxWidth: "420px",
            wordBreak: "break-word",
            whiteSpace: "normal",
          },
        }}
      />
    </>
  );
}

export default App;
export { MyContext };
