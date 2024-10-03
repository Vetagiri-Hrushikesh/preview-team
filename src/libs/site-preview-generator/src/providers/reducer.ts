import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

// Defines the initial state for the global state context.
export const defaultState: GlobalState = {
    isAuthenticated: false,           // Tracks the user's authentication status.
    packageType: 'basic',             // Sets the default package type (basic or premium)
    role: 'user',                     // Assigns the default role (user or admin).
    features: [],                     // An array to hold the features enabled for the user.
    selectedDevice: '',               // Stores the selected device name (Android or iOS).
    selectedPreviewUrl: '',           // Holds the URL of the current site preview for the selected device.
  };
  /**
 * Reducer function to manage state transitions based on dispatched actions.
 * Handles updates to various aspects of the global state, including authentication, roles, and device selection.
 *
 * @param {GlobalState} state - The current state of the application.
 * @param {GlobalAction} action - Action dispatched to modify the state.
 * @returns {GlobalState} - The new state after applying the action.
 */
  export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch (action.type) {
      case actionTypes.SET_AUTHENTICATION:
        // Updates the user's authentication status.
        return { ...state, isAuthenticated: action.payload };
      case actionTypes.SET_USER_PACKAGE_TYPE:
        // Updates the package type for the user (basic or premium).
        return { ...state, packageType: action.payload };
      case actionTypes.SET_USER_ROLE:
        // Updates the user's role (user or admin)
        return { ...state, role: action.payload };
      case actionTypes.SET_AVAILABLE_FEATURES:
        // Updates the list of features available to the user.
        return { ...state, features: action.payload };
      case actionTypes.SET_SELECTED_ANDROID_DEVICE:
      case actionTypes.SET_SELECTED_IOS_DEVICE:
        // Sets the currently selected Android or iOS device for preview
        return { ...state, selectedDevice: action.payload };
      case actionTypes.UPDATE_PREVIEW_URL:
        // Updates the current preview URL based on the selected device and changes.
        return { ...state, selectedPreviewUrl: action.payload };
      default:
        // Returns the current state unchanged if the action type is not recognized.
        return state;
    }
}