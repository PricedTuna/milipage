import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppRouter from "./router/AppRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import THEME from "./assets/theme";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <UserProvider>
        <CssBaseline />
        <AppRouter />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
