import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import AndroidDevices from '../components/settings/android-devices/AndroidDevices';
import IOSDevices from '../components/settings/ios-devices/IOSDevices';

interface FeatureControllerProps {
  features: string[]; // Array of feature identifiers to be rendered as tabs.
}

const FeatureController: React.FC<FeatureControllerProps> = React.memo(({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderFeature = (feature: string) => {
    switch (feature) {
      case 'AndroidDevices':
        return <AndroidDevices />;
      case 'iOSDevices':
        return <IOSDevices />;
      default:
        return <div>Feature not implemented</div>;
    }
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="device type tabs">
        {features.map((feature, index) => (
          <Tab key={index} label={feature.replace(/([A-Z])/g, ' $1').trim()} />
        ))}
      </Tabs>
      {features[selectedTab] ? renderFeature(features[selectedTab]) : null}
    </div>
  );
});

export default FeatureController;
