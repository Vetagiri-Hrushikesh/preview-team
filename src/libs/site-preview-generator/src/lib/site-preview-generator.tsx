import React from 'react';
import { Box } from '@mui/material';
import DisplayController from '../controllers/DisplayController';
import LivePreview from '../components/preview/LivePreview';

/**
 * SitePreviewGenerator Component
 * 
 * This component serves as the main layout for the site preview generator tool.
 * It organizes and displays the control for selecting device sizes (via `DisplayController`)
 * on the left side and provides a live preview of the changes on the right side.
 * 
 * The component uses Material-UI's `Box` component to manage layout and styling,
 * ensuring a responsive and centered UI.
 */
const SitePreviewGenerator = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      {/* Left container to display controls, such as selecting device sizes. */}
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        <DisplayController />
      </Box>
      {/* Right container for displaying the live preview of the current selections. */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LivePreview />
      </Box>
    </Box>
  );
};

export default SitePreviewGenerator;
