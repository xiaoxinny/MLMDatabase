import { Typography, Card } from '@mui/material';

export const ResultCard = () => {
  return (
    <Card sx={{ width: 400, padding: 2 }}>
      <Typography variant='h6' gutterBottom>
        Search Results
      </Typography>
      {/* Placeholder for results */}
      <Typography variant='body2'>
        No results to display. Please perform a search.
      </Typography>
    </Card>
  );
};
