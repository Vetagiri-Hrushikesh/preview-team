import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalContext';

// Interface representing the structure of a device.
interface Device {
  name: string;       // The name of the device.
  screenSize: string; // The screen size of the device.
}
/**
 * AndroidDevices Component
 * 
 * This component displays a list of Android devices for selection.
 * It utilizes Material-UI's List component to present each device with its name and screen size.
 * When a device is selected, it dispatches an action to update the global state with the selected device's name.
 * 
 * @returns JSX.Element - A list of selectable Android devices.
 */
const AndroidDevices: React.FC = () => {
  const { dispatch } = useGlobalState();  // Access the global state dispatch function.
  const androidDevices: Device[] = [      // Array of Android devices with their names and screen sizes.
    { name: 'Pixel 5', screenSize: '6.0"' },
    { name: 'Samsung Galaxy S21', screenSize: '6.2"' },
    { name: 'OnePlus 9', screenSize: '6.55"' },
  ];

    // Handles the selection of a device and updates the global state.
    const handleSelectDevice = (deviceName: string): void => {
      dispatch({ type: 'SET_SELECTED_ANDROID_DEVICE', payload: deviceName });
    };

  return (
    <div>
      <List>
        {androidDevices.map((device, index) => (    // Maps through the device array to create list items.
          <ListItem button key={index} onClick={() => handleSelectDevice(device.name)}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AndroidDevices;
