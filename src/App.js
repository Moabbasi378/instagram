import logo from "./logo.svg";
import "./App.css";
import { Index } from "./pages/indes";
import { ThemeProvider } from "styled-components";
import { them } from "./componants/Theme";

function App() {
  return (
    <ThemeProvider theme={them}>
      <Index />
    </ThemeProvider>
  );
}

export default App;
