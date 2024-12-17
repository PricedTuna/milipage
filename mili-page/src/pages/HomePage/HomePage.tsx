import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Alert,
  Box,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { jsPDF } from "jspdf"; // Importamos jsPDF
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useUser } from "../../context/UserContext";
import { getUserRequests, requestDocument } from "../../services/DocumentsService";
import DocumentCardGrid from "./components/DocumentCardGrid";
import UserRequests from "./components/UserRequests";

const HomePage = () => {
  const {
    state: { user },
  } = useUser(); // Obtener el estado del usuario desde el contexto
  const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para controlar la visibilidad del Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Estado para el mensaje del Snackbar
  const [requests, setRequests] = useState<any[]>([]); // Estado para almacenar las solicitudes del usuario
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    const requestsData = await getUserRequests(user?.numeroCuenta??'');
    setRequests(requestsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchRequests()
  }, [])
  

  // Función para generar y descargar el PDF del Kardex
  const generateKardexPDF = () => {
    const doc = new jsPDF();

    // Agregar contenido al PDF
    doc.setFontSize(16);
    doc.text("Kardex Académico", 20, 20);
    doc.setFontSize(12);
    doc.text(
      `Nombre: ${user?.nombres} ${user?.apellidoPaterno} ${user?.apellidoMaterno}`,
      20,
      40
    );
    doc.text(`Carrera: ${user?.carrera}`, 20, 50);
    doc.text(`Número de cuenta: ${user?.numeroCuenta}`, 20, 60);
    doc.text(`Fecha de nacimiento: ${user?.fechaNacimiento}`, 20, 70);

    // Descargar el PDF
    doc.save("kardex.pdf");
  };

  // Función para mostrar la alerta de la constancia
  const handleSolicitarDocumento = async (document: string) => {
    const currentTime = new Date();
    currentTime.setHours(currentTime.getHours() + 2); // Sumar 2 horas a la hora actual

    // Formatear la hora con un formato sencillo
    const formattedTime = currentTime.toLocaleString();

    // Configurar el mensaje para la Snackbar
    setSnackbarMessage(
      `Constancia solicitada, pase en dos horas (${formattedTime}) por ella a control escolar.`
    );

    // Abrir el Snackbar
    setOpenSnackbar(true);

    const requestData = {
      usuarioRequest: user?.numeroCuenta || "Desconocido",
      document: document,
      fechaSolicitud: new Date(),
      fechaRecogida: currentTime,
    };

    try {
      // Llamar a la función requestDocument para guardar la solicitud
      await requestDocument(requestData);

      // Configurar el mensaje para la Snackbar
      setSnackbarMessage(
        `Constancia solicitada, pase en dos horas (${formattedTime}) por ella a control escolar.`
      );

      // Abrir el Snackbar
      setOpenSnackbar(true);
      fetchRequests();
    } catch (error) {
      console.error("Error al solicitar constancia", error);
    }
  };

  return (
    <Container sx={{ py: 8 }}>
      {/* Ícono de perfil en la esquina superior derecha */}
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
        }}
      >
        <IconButton component={Link} to="/profile" color="primary">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Título y descripción */}
      <Typography variant="h3" align="center" gutterBottom>
        Solicita tus Documentos
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        A continuación, puedes solicitar los documentos oficiales de tu
        historial académico.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Kardex */}
        <DocumentCardGrid
          btnText="Solicitar kardex"
          description="Solicita tu historial académico oficial, actualizado con todas tus calificaciones."
          title="Kardex"
          onClickBtn={generateKardexPDF} // Cambiamos el evento para generar el PDF
        />
        {/* Constancia */}
        <DocumentCardGrid
          btnText="Solicitar Constancia"
          description="Obtén una constancia oficial que avala tu inscripción y status en la universidad."
          title="Constancia de Estudios"
          onClickBtn={() => handleSolicitarDocumento('Constancia de estudios')}
        />
        {/* Credencial Escolar */}
        <DocumentCardGrid
          btnText="Solicitar credencial escolar"
          description="Obtén tus credencial escolar para prácticas."
          title="Credencial Escolar"
          onClickBtn={() => handleSolicitarDocumento('Credencial escolar')}
        />
      </Grid>

      <Box mt={4}>
        <UserRequests requests={requests} />
      </Box>

      {/* Snackbar para mostrar la alerta de la constancia solicitada */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Duración de la notificación
        onClose={() => setOpenSnackbar(false)} // Cierra la notificación
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Posición en la pantalla
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default HomePage;
