import "./App.css";
import React, { createContext } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import Footer from "./components/Footer";
import ProductDetail from "./Pages/ProductDetail";

// context special
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { IoCloseSharp } from "react-icons/io5";
import ProductPopZoom from "./components/ProuctPopZoom";
import ProductDetailComponent from "./components/ProductDetailComponent";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

// Cart Panel
import Drawer from "@mui/material/Drawer";
import CartPanel from "./components/CartPanel";

const MyContext = createContext();

export default function App() {
  const [openProductDetail, setOpenProductDetail] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const [fullWidth, setFullWidth] = React.useState(true);

  {
    /*Cart Panel */
  }
  const [openCartPanel, setOpenCartPanel] = React.useState(false);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseProductDetail = () => {
    setOpenProductDetail(false);
  };

  const values = {
    setOpenProductDetail,
    setOpenCartPanel,
  };
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personal-care" element={<ProductListing />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />

          {/* Product Model */}
          <Dialog
            fullWidth={fullWidth}
            maxWidth={maxWidth}
            open={openProductDetail}
            onClose={handleCloseProductDetail}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className="producrDetailModel"
          >
            <DialogContent>
              <div className="flex items-stretch w-full productDetailModelContainer relative">
                <Button
                  className="w-10! h-10! min-w-10! rounded-full! text-black! absolute! top-0 right-0"
                  onClick={handleCloseProductDetail}
                >
                  <IoCloseSharp className="text-[20px]!"/>
                </Button>

                <div className="col1 w-[40%] h-full flex items-start justify-start">
                  <ProductPopZoom />
                </div>

                <div className="col2 w-[60%] h-full pr-10 px-6 productContent">
                  <ProductDetailComponent />
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Cart Panel */}
          <Drawer
            open={openCartPanel}
            onClose={toggleCartPanel(false)}
            anchor={"right"}
            className="cartPanel"
          >
            <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
              <h4 className="font-semibold">Shopping Cart (3)</h4>
              <IoCloseSharp
                className="text-[20px] link cursor-pointer"
                onClick={toggleCartPanel(false)}
              />
            </div>
            <CartPanel />
          </Drawer>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}

export { MyContext };
