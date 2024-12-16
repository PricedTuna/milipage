import { Box, Button, Container, Paper, TextField, Typography } from "@mui/material";

const ProfilePage = () => {
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
          {/* Campo de nombre */}
          <TextField label="Nombre" fullWidth disabled value="Milagros Guadalupe Orduño Cuevas" />

          {/* Campo de correo */}
          <TextField label="Correo Electrónico" fullWidth disabled value="mili@pili.com" />

          {/* Campo de carrera */}
          <TextField label="Carrera" fullWidth disabled value="Enfermería" />

          {/* Botón para actualizar */}
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Actualizar Información
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
