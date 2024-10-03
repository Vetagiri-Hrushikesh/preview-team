Main Application Structure and Description:
├── Main Application (Root)
│   ├── <GlobalProvider>
│   │   Manages global state and context, passing it down to child components.
│
├── src - Source directory for the application's code.
│   ├── components - Reusable UI components.  
│   │   ├── preview
│   │   │   └── LivePreview.tsx - Shows a live preview of the current settings.
│   │   └── settings
│   │       ├── android-devices
│   │       │   └── AndroidDevices.tsx - Interface for selecting  android devices.
│   │       └── ios-devices
│   │           └── IOSDevices.tsx - Interface for selecting ios devices
│   ├── config
│   │   ├── featureAccessConfig.ts - Defines control access based on roles.
│   │   
│   ├── controllers
│   │   ├── DisplayController.tsx - Manages rendering of features. 
│   │   ├── FeatureController.tsx - Manages feature tabs and selection. 
│   │   
│   ├── handlers
│   │   ├── featureHandlers.ts - Determines accessible features based on role.
│   │   
│   ├── lib
│   │   └── site-preview-generator.tsx - Main component, integrating all parts.
│   ├── providers
│   │   ├── GlobalContext.tsx - Provides global context for state management.
│   │   └── reducer.ts - Contains reducer functions for state updates.
│   ├── types
│   │   └── index.ts - Defines TypeScript types and interfaces for the app.
│   └── utils
│       └── actionTypes.ts - Contains constants for action types in state management.
│
├── tsconfig.json - Configures TypeScript for the project.
├── tsconfig.lib.json - TypeScript configuration for library builds.
├── tsconfig.spec.json - TypeScript configuration for specifications.
└── vite.config.ts - Configuration for the Vite build tool.

File Breakdown and Functionality:
- **GlobalProvider**: A top-level component that wraps the application, providing a global state context. It ensures that all child components can access and manipulate the global state, managing user authentication, roles, and configuration.
- **Components**: This directory is divided into subfolders like preview and settings. Each component is responsible for handling specific user interactions, such as selecting Android/iOS devices or displaying live previews, while reacting to changes in the global state. The components are reusable and modular, aiding maintainability.
- **Configurations**: Contains configuration files  which defines the control access and feature availability based on user roles (e.g., admin, user). These configurations are essential for enforcing role-based access control (RBAC) within the app.
- **Controllers**: Controllers manage the logic and rendering of the UI components. Manages which features or components are visible based on the current state, handles the selection and activation of feature tabs. These components help in separating concerns between UI presentation and logic.
- **Handlers**: The handlers directory includes files like featureHandlers.ts, which are responsible for determining which features and controls are enabled based on the user's role and package type. These handlers ensure that each user only accesses features and controls they are permitted to use.
- **Providers**: Manage the state context and handle state updates through reducers, facilitating global state management across the application.
- **Types**: Centralizes all TypeScript type definitions used across the application, promoting consistency and aiding in maintaining type safety.
- **Utils**: Holds utility constants such as action types, which are used across the application to ensure consistent handling of state changes.
- **Library Component (site-preview-generator.tsx):**: The core component of the application, integrating all the controllers, settings, and preview components. It acts as the main entry point for the site preview generator functionality, managing the overall layout, feature selection, and live preview updates, encapsulating the primary functionality of the application.