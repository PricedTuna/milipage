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
    password: "",
    topicosEnfermeria: {
      "Enfermería laboral": 0,
      "Enfermería basada en la evidencia": 0,
      "Gestión y calidad de los servicios de enfermería": 0,
      "Emprendedurismo y responsabilidad social": 0,
      "Proyectos de investigación en enfermería": 0,
      "Enfermería en desastres y emergencias sanitarias": 0,
    },
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

  const getRandomGrade = () => {
    return Math.floor(Math.random() * 6) + 5; // Valor aleatorio entre 5 y 10
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Asignamos valores aleatorios a los tópicos de enfermería
    const updatedFormData = {
      ...formData,
      topicosEnfermeria: {
        "Enfermería laboral": getRandomGrade(),
        "Enfermería basada en la evidencia": getRandomGrade(),
        "Gestión y calidad de los servicios de enfermería": getRandomGrade(),
        "Emprendedurismo y responsabilidad social": getRandomGrade(),
        "Proyectos de investigación en enfermería": getRandomGrade(),
        "Enfermería en desastres y emergencias sanitarias": getRandomGrade(),
      },
    };

    console.log(updatedFormData); // Verifica los datos antes de guardarlos
    const user = await saveUser(updatedFormData);
    if (user) navigate("/login");
    else console.error("Error al guardar el usuario");
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
