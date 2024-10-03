import { FeatureKey, PackageType, RoleType, FeatureConfig } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';


/**
 * Retrieves the list of features a user can access based on their package type (e.g., basic or premium)
 * and role (e.g., user or admin). The function filters the available features from the `featureAccessConfig`
 * and returns only those that match the user's role and package permissions.
 * 
 * @param {PackageType} packageType - The subscription package type of the user (basic or premium).
 * @param {RoleType} role - The role of the user (user or admin).
 * @returns {FeatureKey[]} - An array of feature keys the user is allowed to access.
 */
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  const keys = Object.keys(featureAccessConfig) as FeatureKey[];  // Get all feature keys from the access config.
    // Filter and return only the features the user has access to based on role and package type.
  return keys.filter((feature) => {
    const accessConfig = featureAccessConfig[feature];    // Get access configuration for each feature.
    return accessConfig && accessConfig[role][packageType];   // Check if access is allowed.
  });
};
