import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

interface Props {
  title: string;
  description: string;
  btnText: string;
  onClickBtn: () => void;
}

function DocumentCardGrid({ btnText, description, onClickBtn, title }: Props) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={onClickBtn}
            fullWidth
          >
            {btnText}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DocumentCardGrid;
