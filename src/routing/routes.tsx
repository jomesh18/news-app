import { createBrowserRouter } from "react-router-dom";
import NewsList from "../components/NewsList";

const router = createBrowserRouter([
  { path: "/", element: <NewsList /> },
  { path: "/category/:category", element: <NewsList /> },
]);

export default router;
