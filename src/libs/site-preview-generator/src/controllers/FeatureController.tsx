import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import AndroidDevices from '../components/settings/android-devices/AndroidDevices';
import IOSDevices from '../components/settings/ios-devices/IOSDevices';

interface FeatureControllerProps {
  features: string[]; // Array of feature identifiers to be rendered as tabs.
}
/**
 * FeatureController Component
 * 
 * This component provides a tabbed interface for selecting and rendering device-related features.
 * Each tab corresponds to a specific feature (e.g., AndroidDevices or iOSDevices), and selecting a tab
 * will display the associated feature component.
 * 
 * It uses the `selectedTab` state to track the currently active tab and dynamically renders the appropriate
 * feature component based on the selected tab.
 * 
 * @param {FeatureControllerProps} props - The props containing the list of features to be rendered.
 * @returns JSX.Element - A tabbed interface rendering the appropriate feature component based on the active tab.
 */
const FeatureController: React.FC<FeatureControllerProps> = React.memo(({ features }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  
  // Handle tab selection and update the selected tab state.

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  /**
   * Dynamically renders the feature component based on the selected feature.
   * @param {string} feature - The feature identifier.
   * @returns JSX.Element - The corresponding feature component.
   */
  const renderFeature = (feature: string) => {
    switch (feature) {
      case 'AndroidDevices':
        return <AndroidDevices />;  // Render the AndroidDevices component
      case 'iOSDevices':
        return <IOSDevices />;    // Render the IOSDevices component.
      default:
        return <div>Feature not implemented</div>; // Default message if feature is not implemented.
    }
  };

  return (
    <div>
       {/* Render tab navigation for selecting different features */}
      <Tabs value={selectedTab} onChange={handleChange} aria-label="device type tabs">
        {features.map((feature, index) => (
          <Tab key={index} label={feature.replace(/([A-Z])/g, ' $1').trim()} />
        ))}
      </Tabs>
      {/* Render the component for the currently selected feature */}
      {features[selectedTab] ? renderFeature(features[selectedTab]) : null}
    </div>
  );
});

export default FeatureController;
