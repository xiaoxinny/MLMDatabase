import { Stack } from '@mui/material';
import PageContainer from '../components/containers/PageContainer';
import Typography from '@mui/material/Typography';
import { SearchPane } from '../components/search/SearchPane';
import { SearchCard } from '../components/search/SearchCard';
import { ResultPane } from '../components/result/ResultPane';
import { ResultCard } from '../components/result/ResultCard';

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
        <Stack direction='column' spacing={2} mb={4} mt={4}>
          <Typography variant='h1'>Welcome to the MLM Database</Typography>
          <Typography variant='subtitle1' align='center'>
            Explore our comprehensive database of MLM companies and their
            employees.
          </Typography>
        </Stack>
        {/* The input and result fields */}
        <Stack direction='row'>
          <Stack>
            <SearchPane>
              <SearchCard />
            </SearchPane>
          </Stack>
          <Stack>
            <ResultPane>
              <ResultCard />
            </ResultPane>
          </Stack>
        </Stack>
      </Stack>
    </PageContainer>
  );
};
