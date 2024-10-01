import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalContext';

interface Device {
  name: string;
  screenSize: string;
}

const AndroidDevices: React.FC = () => {
  const { dispatch } = useGlobalState();
  const androidDevices: Device[] = [
    { name: 'Pixel 5', screenSize: '6.0"' },
    { name: 'Samsung Galaxy S21', screenSize: '6.2"' },
    { name: 'OnePlus 9', screenSize: '6.55"' },
  ];

    const handleSelectDevice = (deviceName: string): void => {
      dispatch({ type: 'SET_SELECTED_ANDROID_DEVICE', payload: deviceName });
    };

  return (
    <div>
      <List>
        {androidDevices.map((device, index) => (
          <ListItem button key={index} onClick={() => handleSelectDevice(device.name)}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AndroidDevices;
