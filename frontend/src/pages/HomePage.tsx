import { Stack } from '@mui/material';
import PageContainer from '../components/containers/PageContainer';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
  return (
    <PageContainer>
      <Stack
        flexGrow={1}
        sx={{
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* For the title and subtitle */}
        <Stack direction='column' spacing={2} mb={4}>
          <Typography variant='h4'>Welcome to the MLM Database</Typography>
        </Stack>
        {/* The input and result fields */}
        <Stack direction='row'>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
