import { List, ListItem, ListItemText } from '@mui/material';

const AndroidDevices = () => {
  const androidDevices = [
    { name: 'Pixel 5', screenSize: '6.0"' },
    { name: 'Samsung Galaxy S21', screenSize: '6.2"' },
    { name: 'OnePlus 9', screenSize: '6.55"' },
  ];

  return (
    <div>
      <h2>Android Device Configurations</h2>
      <List>
        {androidDevices.map((device, index) => (
          <ListItem key={index}>
            <ListItemText primary={device.name} secondary={`Screen Size: ${device.screenSize}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default AndroidDevices;
