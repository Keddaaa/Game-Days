import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { VoteProvider } from "./context/VoteContext";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <VoteProvider>
                <App />
            </VoteProvider>
        </BrowserRouter>
    </StrictMode>,
);
