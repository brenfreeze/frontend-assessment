import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home";
import ResponsiveWeb from "./routes/ResponsiveWeb/ReponsiveWeb.index";
import AccordionsTabs, {
  loader as accordionsLoader,
} from "./routes/AccordionsTabs/AccordionsTabs.index";
import Banana from './routes/banana/Banana';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/responsive-page-design",
    element: <ResponsiveWeb />,
  },
  {
    path: "/accordions-and-tabs",
    element: <AccordionsTabs />,
    loader: accordionsLoader,
  },
  {
    path: "/banana",
    element: <Banana />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
