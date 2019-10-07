import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
