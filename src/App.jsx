/* eslint-disable react-hooks/exhaustive-deps */
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
