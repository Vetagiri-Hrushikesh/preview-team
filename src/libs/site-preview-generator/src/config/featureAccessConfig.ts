import { FeatureConfig } from '../types';

export const featureAccessConfig: FeatureConfig = {
    AndroidDevices: {
      user: { premium: true, basic: true },
      admin: { premium: true, basic: true }
    },
    iOSDevices: {
      user: { premium: true, basic: false },
      admin: { premium: true, basic: true }
    }
};
