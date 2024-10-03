import React from 'react';
import { useGlobalState } from '../../providers/GlobalContext';

/**
 * LivePreview Component
 * 
 * This component displays the name of the selected device from the global state.
 * It updates automatically as the selected device changes in the application.
 * 
 * @returns JSX.Element - Displays the selected device's name.
 */
const LivePreview = () => {
  const { state } = useGlobalState(); // Access the global state using a custom hook.
  const { selectedDevice } = state;  // Destructure the selected device from the global state.

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h2>Selected Device</h2>
      {/* Render the selected device name or a default message if no device is selected */}
      {selectedDevice ? (
        <p>{selectedDevice}</p>
      ) : (
        <p>No device selected.</p>
      )}
    </div>
  );
};

export default LivePreview;
