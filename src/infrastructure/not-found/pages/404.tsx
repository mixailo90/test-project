import { Box, Typography } from '@mui/material';

export const NotFoundPage = () => {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Typography variant="h1" component="div">
        Page not found!
      </Typography>
    </Box>
  );
};
