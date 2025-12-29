import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "sonner";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routers />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}
