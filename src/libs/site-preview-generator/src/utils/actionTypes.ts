// actionTypes.ts

// Action type for setting the authentication status of the user in the state
export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';

// Action type for setting the role of the user (e.g., user or admin) in the state
export const SET_USER_ROLE = 'SET_USER_ROLE';

// Action type for setting the package type of the user (e.g., basic or premium) in the state
export const SET_USER_PACKAGE_TYPE = 'SET_USER_PACKAGE_TYPE';

// Action type for setting the features available to the user based on their subscription package
export const SET_AVAILABLE_FEATURES = 'SET_AVAILABLE_FEATURES';

// Action type for selecting an Android device for preview in the state
export const SET_SELECTED_ANDROID_DEVICE = 'SET_SELECTED_ANDROID_DEVICE';

// Action type for selecting an iOS device for preview in the state
export const SET_SELECTED_IOS_DEVICE = 'SET_SELECTED_IOS_DEVICE';

// Action type for updating the preview URL based on the selected device and user selections
export const UPDATE_PREVIEW_URL = 'UPDATE_PREVIEW_URL';