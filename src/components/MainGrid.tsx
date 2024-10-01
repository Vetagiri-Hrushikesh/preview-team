import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import { SitePreviewGenerator } from 'site-preview-generator';
import { useGlobalState } from 'site-preview-generator';

const MainGrid = () => {
  const globalState = useGlobalState(); // Assuming it fetches some necessary global states

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      {/* Optionally, pass props to SitePreviewGenerator if required */}
      <SitePreviewGenerator />
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};


export default MainGrid;
