import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { User } from "../../domain/models/User";
import { saveUser } from "../../services/UserService";

const carreras = [
  "Ingeniería en software",
  "Derecho",
  "Medicina",
  "Enfermería",
  "Nutrición",
];

const RegisterPage = () => {
  const [formData, setFormData] = useState<User>({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    carrera: "",
    numeroCuenta: "",
    fechaNacimiento: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
      | SelectChangeEvent<string>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Aquí puedes manejar los datos, por ejemplo enviarlos a un backend
    const user = await saveUser(formData);
    if (user) navigate("/home");
    else console.error("aaaaaaa") // !
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
          bgcolor: "primary.main",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            width: "100%",
            maxWidth: 600, // Ancho máximo del formulario
          }}
        >
          <Typography variant="h3" align="center" gutterBottom>
            Registro
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            {/* Nombres */}
            <TextField
              label="Nombres"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Apellido Paterno */}
            <TextField
              label="Apellido Paterno"
              name="apellidoPaterno"
              value={formData.apellidoPaterno}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Apellido Materno */}
            <TextField
              label="Apellido Materno"
              name="apellidoMaterno"
              value={formData.apellidoMaterno}
              onChange={handleChange}
              fullWidth
              required
            />

            {/* Carrera */}
            <FormControl fullWidth required>
              <InputLabel>Carrera</InputLabel>
              <Select
                label="Carrera"
                name="carrera"
                value={formData.carrera}
                onChange={handleChange}
              >
                {carreras.map((carrera, index) => (
                  <MenuItem key={index} value={carrera}>
                    {carrera}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Password */}
            <TextField
              label="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              type="password"
            />

            {/* Número de Cuenta */}
            <TextField
              label="Número de Cuenta"
              name="numeroCuenta"
              value={formData.numeroCuenta}
              onChange={handleChange}
              fullWidth
              required
              type="number"
            />

            {/* Fecha de Nacimiento */}
            <TextField
              label="Fecha de Nacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              fullWidth
              required
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            {/* Botón de registro */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              // component={Link}
              // to="/home"
            >
              Registrar
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default RegisterPage;
