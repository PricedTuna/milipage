import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

function LandingPage() {
  return (
    <>
      <CssBaseline />
      {/* Página completa con Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Asegura que la altura de la página ocupe todo el viewport
        }}
      >
        {/* Navbar */}
        <AppBar
          position="static"
          color="primary"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Universidad Autónoma de Sinaloa
            </Typography>
            <Button color="inherit" component={Link} to="/login">
              Iniciar Sesión
            </Button>
          </Toolbar>
        </AppBar>

        {/* Contenido principal */}
        <Box
          component="main"
          sx={{
            flex: 1, // Ocupa todo el espacio disponible
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              bgcolor: "primary.main",
              color: "white",
              py: 6,
              textAlign: "center",
              height: "100%", // Esto asegura que el Hero ocupe todo el espacio disponible sin scroll
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Container>
              <Typography variant="h3" gutterBottom>
                Solicita y Descarga tus Documentos Universitarios
              </Typography>
              <Typography variant="h6" gutterBottom>
                Kardex, constancias de estudio, certificados y más, disponibles
                en un solo lugar.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 2 }}
                component={Link}
                to="/login"
              >
                Solicitar Documento
              </Button>
            </Container>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            bgcolor: "grey.900",
            color: "white",
            py: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Universidad Autónoma de Sinaloa.
            Todos los derechos reservados.
          </Typography>
          <Typography variant="body2">
            Esta pagina no busca sustituir funciones originales de la
            Universidad Autónoma de Sinaloa
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
