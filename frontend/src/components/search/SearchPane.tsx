import { Stack } from '@mui/material';
import { type ReactNode } from 'react';

export const SearchPane = ({ children }: { children: ReactNode }) => {
  return (
    <Stack direction='column' p={2}>
      {children}
    </Stack>
  );
};
