import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography
} from "@mui/material";

const UserRequests = ({ requests }: { requests: any[] }) => {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Solicitudes del Usuario
      </Typography>

      {requests.length > 0 ? (
        <Grid container spacing={4}>
          {requests.map((request) => (
            <Grid item xs={12} md={6} key={request.id}>
              <Paper sx={{ p: 3, boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {request.document}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body1" color="textSecondary">
                    <strong>Fecha de Solicitud:</strong>{" "}
                    {new Date(
                      request.fechaSolicitud.seconds * 1000
                    ).toLocaleString()}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    <strong>Fecha de Recogida:</strong>{" "}
                    {new Date(
                      request.fechaRecogida.seconds * 1000
                    ).toLocaleString()}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1" align="center" color="textSecondary">
          No hay solicitudes para este usuario.
        </Typography>
      )}
    </Container>
  );
};

export default UserRequests;
