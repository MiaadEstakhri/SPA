import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Profile from "./pages/Profile";

const routers = [
  { path: "/", element: <HomePage />, exact: true },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/profile", element: <Profile /> },
];

export default routers;
