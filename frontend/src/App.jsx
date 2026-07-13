import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;