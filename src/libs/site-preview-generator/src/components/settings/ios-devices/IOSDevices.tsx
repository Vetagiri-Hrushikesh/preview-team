import { List, ListItem, ListItemText } from '@mui/material';

const IOSDevices = () => {
  const iOSDevices = [
    { name: 'iPhone 12', screenSize: '6.1"' },
    { name: 'iPhone 12 Pro', screenSize: '6.1"' },
    { name: 'iPhone SE (2nd generation)', screenSize: '4.7"' },
  ];

  return (
    <div>
      <h2>iOS Device Configurations</h2>
      <List>
        {iOSDevices.map((device, index) => (
          <ListItem key={index}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default IOSDevices;
