import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import { useUser } from "../../context/UserContext"; // Importa el hook del contexto
import { useNavigate } from "react-router"; // Usamos navigate para redirigir

const ProfilePage = () => {
  // Obtener el estado del usuario y las acciones del contexto
  const { state, dispatch } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Llama a la acción de logout en el contexto
    dispatch({ type: "LOGOUT" });
    // Redirige al usuario a la página principal ("/")
    navigate("/");
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Perfil de Usuario
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>
          Información de tu perfil
        </Typography>

        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Campo de Nombre */}
          <TextField
            label="Nombre"
            fullWidth
            disabled
            value={`${state.user?.nombres} ${state.user?.apellidoPaterno} ${state.user?.apellidoMaterno}`}
          />

          {/* Campo de Carrera */}
          <TextField
            label="Carrera"
            fullWidth
            disabled
            value={state.user?.carrera}
          />

          {/* Campo de Número de Cuenta */}
          <TextField
            label="Número de cuenta"
            fullWidth
            disabled
            value={state.user?.numeroCuenta}
          />

          {/* Campo de Fecha de Nacimiento */}
          <TextField
            label="Fecha de Nacimiento"
            fullWidth
            disabled
            value={state.user?.fechaNacimiento}
          />

          {/* Botón de Logout */}
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 2 }}
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
