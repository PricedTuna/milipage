import {
  Box,
  Button,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    console.log("Correo:", email.current);
    console.log("Contraseña:", password.current);

    if (email.current == "mili@pili.com" && password.current == "milipili") {
      navigate("/home");
    }
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Asegura que ocupa toda la pantalla
          bgcolor: "grey.100",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400, // Ancho máximo del formulario
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            gutterBottom
          >
            Accede a tu cuenta universitaria
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2, // Espaciado entre elementos
            }}
          >
            {/* Campo de Correo */}
            <TextField
              label="Correo Electrónico"
              type="email"
              fullWidth
              required
              onChange={(e) => (email.current = e.target.value)}
            />

            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              required
              onChange={(e) => (password.current = e.target.value)}
            />

            {/* Botón de Inicio de Sesión */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Iniciar Sesión
            </Button>
          </Box>

          {/* Enlace de recuperación */}
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ mt: 2 }}
          >
            ¿No tienes una cuenta? <Link to={'/register'}>Registrate aquí</Link>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
