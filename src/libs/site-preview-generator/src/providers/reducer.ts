import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

export const defaultState: GlobalState = {
    isAuthenticated: false,
    packageType: 'basic',
    role: 'user',
    features: [],
    selectedDevice: '',
    selectedPreviewUrl: '',
  };
  
  export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
    switch (action.type) {
      case actionTypes.SET_AUTHENTICATION:
        return { ...state, isAuthenticated: action.payload };
      case actionTypes.SET_USER_PACKAGE_TYPE:
        return { ...state, packageType: action.payload };
      case actionTypes.SET_USER_ROLE:
        return { ...state, role: action.payload };
      case actionTypes.SET_AVAILABLE_FEATURES:
        return { ...state, features: action.payload };
      case actionTypes.SET_SELECTED_ANDROID_DEVICE:
      case actionTypes.SET_SELECTED_IOS_DEVICE:
        return { ...state, selectedDevice: action.payload };
      case actionTypes.UPDATE_PREVIEW_URL:
        return { ...state, selectedPreviewUrl: action.payload };
      default:
        return state;
    }
}