import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, Card, CardActions, CardContent, Container, Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <Container sx={{ py: 8 }}>
      {/* Ícono de perfil en la esquina superior derecha */}
      <Box sx={{
        position: "absolute", 
        top: 16, 
        right: 16
      }}>
        <IconButton component={Link} to="/profile" color="primary">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Título y descripción */}
      <Typography variant="h3" align="center" gutterBottom>
        Solicita tus Documentos
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        A continuación, puedes solicitar los documentos oficiales de tu historial académico.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {/* Kardex */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Kardex
              </Typography>
              <Typography variant="body1">
                Solicita tu historial académico oficial, actualizado con todas tus calificaciones.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Solicitar Kardex
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Constancia */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Constancia de Estudios
              </Typography>
              <Typography variant="body1">
                Obtén una constancia oficial que avala tu inscripción y status en la universidad.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" fullWidth>
                Solicitar Constancia
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
