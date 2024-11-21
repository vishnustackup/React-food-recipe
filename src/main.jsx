import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SidebarProvider } from "./context/SideBarContext";
import { MealProvider } from "./context/MealContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SidebarProvider>
      <MealProvider>
        <App />
      </MealProvider>
    </SidebarProvider>
  </StrictMode>
);
