import { BrowserRouter } from "react-router";
import Routers from "./Routers";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "sonner";
import ThemeProvider from "./providers/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routers />
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
