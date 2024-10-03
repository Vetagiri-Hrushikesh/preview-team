// src/controllers/DisplayController.tsx

import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getAllowedFeatures } from '../handlers/featureHandler';
import FeatureController from './FeatureController';

/**
 * DisplayController Component
 * 
 * This component is responsible for managing and displaying the features that the user is allowed to access
 * based on their role (e.g., user or admin) and subscription package (e.g., basic or premium). 
 * It fetches the allowed features when the user is authenticated, and updates the global state with these features.
 * 
 * The component relies on the global state for user data such as authentication status, role, and package type.
 * 
 * @returns JSX.Element - Renders the list of available features using the `FeatureController`.
 */
const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Access global state and dispatch from context.
  const { isAuthenticated, role, packageType } = state; // Destructure necessary values from the state.

  // Effect to fetch and update allowed features when the user is authenticated.
  useEffect(() => {
    if (!isAuthenticated) return;

    // Fetch allowed features based on the user's package and role.
    const allowedFeatures = getAllowedFeatures(packageType, role);
    
    // Dispatch action to update the global state with the available features.
    dispatch({ type: 'SET_AVAILABLE_FEATURES', payload: allowedFeatures });

  }, [isAuthenticated, role, packageType]); // Dependencies for re-running the effect.

  // If the user is not authenticated, do not render anything.
  if (!isAuthenticated) {
    return null;
  }

  // Render the available features using the FeatureController component.
  return (
    <>
      {/* Pass the features from global state to FeatureController for rendering */}
      <FeatureController features={state.features} />
    </>
  );
};

export default DisplayController;
