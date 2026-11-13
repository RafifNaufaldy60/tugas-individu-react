import { createRoot } from "react-dom/client";
import LiveClock from "./LiveClock";

createRoot(document.getElementById("root")).render(
  <strictMode>
    <LiveClock />
  </strictMode>
)