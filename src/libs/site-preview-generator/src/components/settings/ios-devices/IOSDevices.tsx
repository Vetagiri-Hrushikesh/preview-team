import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalContext';

// Define an interface for the iOS device properties
interface IOSDevice {
  name: string;
  screenSize: string;
}

// Component to display iOS devices
const IOSDevices: React.FC = () => {
  const { dispatch } = useGlobalState();

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
        {iOSDevices.map((device, index) => (
          <ListItem button key={index} onClick={() => handleSelectDevice(device.name)}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IOSDevices;
