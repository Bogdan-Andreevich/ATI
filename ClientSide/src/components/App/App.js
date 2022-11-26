import React from "react";
import { Routes, Route } from "react-router-dom";

import PageLayout from "../PageLayout/PageLayout";
import Cart from "../../pages/Cart/Cart.js";

import "../../utils/scss/reset.scss"; // importing a reset.scss

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
