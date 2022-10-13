import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/blog";
import PostPage from "./pages/PostPage";


const routers = [
  { path: "/blogs/:id", element: <Blog /> },
  { path: "/blogs", element: <BlogPage /> },
  { path: "/post/:data", element: <PostPage /> },
  { path: "/profile/*", element: <Profile /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "*", element: <NotFound /> },
  { path: "/", element: <HomePage /> },
];

export default routers;
