import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "./components/Ui/ScrollToTopButton";

function App() {
  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    <ScrollToTopButton/>
    </>
  )
}

export default App

