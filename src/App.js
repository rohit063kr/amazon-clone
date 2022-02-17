import React from "react";

import data from "./data";

import Header from "./componenets/Header/Header";
import ProductSection from "./componenets/Products-section/ProductSetion";

const API_URL =
  "https://api.rainforestapi.com/request?type=category&url=https%3A%2F%2Fwww.amazon.com%2Fs%3Fbbn%3D16225009011%26rh%3Dn%253A%252116225009011%252Cn%253A502394%252Cn%253A281052";

const API_KEY = "A72CC17F8DFB42B3B85A0A9A27E2F381";

const App = function () {
  const sendRequest = async function () {
    // const response = await fetch(`${API_URL}&api_key=${API_KEY}`);
    // const data = await response.json();
  };
  sendRequest();

  return (
    <div className="app">
      <Header />
      <ProductSection />
    </div>
  );
};

export default App;
