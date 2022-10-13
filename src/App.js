import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routers from "./routes";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/blog";
import PostPage from "./pages/PostPage";



function App() {
  return (
    
    <Layout>
      <Routes>
        {/* <Route path="/blogs/:id" element={<Blog />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/post/:id([0-9]+)?" element={<PostPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} /> */}
        {routers.map((route,index) => (
          <Route {...route} key={index}/>
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
