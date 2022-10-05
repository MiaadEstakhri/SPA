import "./App.css";
import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import routers from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routers.map((route) => (
          <Route {...route} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
