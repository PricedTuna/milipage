import {
  Box,
  Button,
  CssBaseline,
  Paper,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginUser } from "../../services/UserService";
import { useUser } from "../../context/UserContext"; // Importar el hook del contexto

const LoginPage = () => {
  const navigate = useNavigate();

  // Obtener el contexto y dispatch
  const { state, dispatch } = useUser();

  // Estado para manejar los campos del formulario
  const [numeroCuenta, setNumeroCuenta] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();

    // Establecer el estado de carga
    dispatch({ type: "SET_LOADING", payload: true });

    // Llamar al servicio de login
    const user = await loginUser(numeroCuenta, password);

    if (user) {
      // Si el login es exitoso, guardar el usuario en el contexto
      dispatch({ type: "LOGIN_SUCCESS", payload: user });
      console.log("Usuario autenticado", user);
      navigate("/home");
    } else {
      // Si no se encuentra el usuario, mostrar mensaje de error
      dispatch({ type: "LOGIN_FAILURE", payload: "Número de cuenta o contraseña incorrectos." });
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
          minHeight: "100vh",
          bgcolor: "primary.main",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 400,
          }}
        >
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
            Accede a tu cuenta universitaria
          </Typography>

          {/* Mostrar el error si ocurre */}
          {state.error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {state.error}
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Campo de Número de Cuenta */}
            <TextField
              label="Número de cuenta"
              type="number"
              fullWidth
              required
              value={numeroCuenta}
              onChange={(e) => setNumeroCuenta(e.target.value)}
            />

            {/* Campo de Contraseña */}
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Botón de Inicio de Sesión */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Iniciar Sesión
            </Button>
          </Box>

          {/* Enlace de recuperación */}
          <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 2 }}>
            ¿No tienes una cuenta? <Link to={"/register"}>Regístrate aquí</Link>
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default LoginPage;
