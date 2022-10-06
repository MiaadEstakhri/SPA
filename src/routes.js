import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const routers = [
  { path: "/", element: <HomePage />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/profile", element: <Profile /> },
  { path: "*", element: <NotFound /> },
];

export default routers;
