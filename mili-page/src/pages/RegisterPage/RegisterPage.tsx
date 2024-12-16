import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Link } from "react-router";

const carreras = [
  "Ingeniería en Sistemas",
  "Derecho",
  "Medicina",
  "Enfermería",
  "Nutrición",
];

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    carrera: "",
    numeroCuenta: "",
    fechaNacimiento: "",
  });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData); // Aquí puedes manejar los datos, por ejemplo enviarlos a un backend
  };

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Registro de Usuario
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
          component={Link}
          to="/home"
        >
          Registrar
        </Button>
      </Box>
    </Container>
  );
};

export default RegisterPage;
