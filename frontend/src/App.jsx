import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;