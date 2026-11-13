import Mahasiswa from "./Mahasiswa";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


createRoot(document.getElementById("root"))
.render(
    <strictMode>
        <Mahasiswa />
    </strictMode>
)