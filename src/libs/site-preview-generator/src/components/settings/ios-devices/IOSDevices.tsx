import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalContext';

// Define an interface for the iOS device properties
interface IOSDevice {
  name: string;        // The name of the iOS device.
  screenSize: string;   // The screen size of the iOS device.
}

/**
 * IOSDevices Component
 * 
 * This component displays a list of iOS devices for selection.
 * It utilizes Material-UI's List component to present each device with its name and screen size.
 * When a device is selected, it dispatches an action to update the global state with the selected device's name.
 * 
 * @returns JSX.Element - A list of selectable iOS devices.
 */
const IOSDevices: React.FC = () => {
  const { dispatch } = useGlobalState(); // Access the global state dispatch function.

  // Array of iOS devices
  const iOSDevices: IOSDevice[] = [
    { name: 'iPhone 12', screenSize: '6.1"' },
    { name: 'iPhone 12 Pro', screenSize: '6.1"' },
    { name: 'iPhone SE (2nd generation)', screenSize: '4.7"' },
    { name: 'iPhone 11', screenSize: '6.1"' },
    { name: 'iPhone 11 Pro', screenSize: '5.8"' }
  ];

  // Function to handle selecting an iOS device
  const handleSelectDevice = (deviceName: string): void => {
    dispatch({ type: 'SET_SELECTED_IOS_DEVICE', payload: deviceName });
  };

  return (
    <div>
      <List>
        {iOSDevices.map((device, index) => (    // Maps through the iOS devices array to create list items.
          <ListItem button key={index} onClick={() => handleSelectDevice(device.name)}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IOSDevices;
