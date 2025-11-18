import { type ReactNode, useEffect } from 'react';
import { Container, type SxProps, type Theme } from '@mui/material';

const PageContainer = ({
  children,
  sx
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        p: '0 !important',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        ...sx
      }}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
