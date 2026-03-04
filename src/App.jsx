import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Global from "./global/Global";
import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import Industries from "./pages/Industries"
import Casestudies from "./pages/Casestudies"
import Contact from "./pages/Contact"


const router = createBrowserRouter([
  {
    path:"/",
    element:<Global/>,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"services",
        element:<Services />
      },
      {
        path:"industries",
        element:<Industries />
      },
      {
        path:"case-studies",
        element:<Casestudies />
      },
      {
        path:"contact",
        element:<Contact />
      },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
