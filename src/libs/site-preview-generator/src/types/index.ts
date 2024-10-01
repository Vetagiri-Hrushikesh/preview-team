// types/index.ts
import { ComponentType } from "react";

// Enumerates available package types within the application.
export type PackageType = 'basic' | 'premium';

// Enumerates available roles for users within the application.
export type RoleType = 'user' | 'admin';

// Enumerates keys for identifying features within the application.
export type FeatureKey = 'AndroidDevices' | 'iOSDevices';

// Describes the accessibility of features based on the package type.
export interface FeatureAccess {
  premium: boolean;
  basic: boolean;
}

// Defines the role-based access model for different features.
export interface RoleBasedAccess {
  user: FeatureAccess;
  admin: FeatureAccess;
}

// Maps feature keys to their corresponding role-based access configurations.
export type FeatureConfig = {
    [key in FeatureKey]: RoleBasedAccess;
};
// Optional props for components expecting a style attribute.
export interface DevicePreviewProps {
  style?: React.CSSProperties;
}

// Defines the structure of the global state for the application.
export interface GlobalState {
  isAuthenticated: boolean;
  packageType: PackageType;
  role: RoleType;
  features: FeatureKey[];
  selectedDevice: string;
  selectedPreviewUrl: string;
}

// Enumerates types of actions in the global state management.
export type GlobalAction = 
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_USER_PACKAGE_TYPE'; payload: PackageType }
  | { type: 'SET_USER_ROLE'; payload: RoleType }
  | { type: 'SET_AVAILABLE_FEATURES'; payload: FeatureKey[] }
  | { type: 'SET_SELECTED_ANDROID_DEVICE'; payload: string }
  | { type: 'SET_SELECTED_IOS_DEVICE'; payload: string }
  | { type: 'UPDATE_PREVIEW_URL'; payload: string };
