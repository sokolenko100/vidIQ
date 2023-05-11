import React, {createContext, useContext, createRef} from 'react';
import type {
  NavigationContainerRef,
  ParamListBase,
} from '@react-navigation/native';

// Specify explicit types for navigationRef.
const navigationRef = createRef<NavigationContainerRef<ParamListBase>>();

// Add explicit types to function arguments and return types.
const resetNavigation = (index: number, name: string): void => {
  navigationRef.current?.reset({
    index,
    routes: [
      {
        name,
      },
    ],
  });
};

// Make params optional.
const navigateTo = (name: string, params?: ParamListBase): void => {
  navigationRef.current?.navigate(name, params);
};

// Add type to the root navigation context.
type RootNavigationContextType = ReturnType<typeof useRootNavigation>;

const RootNavigationContext = createContext<RootNavigationContextType>({});

const RootNavigationProvider = RootNavigationContext.Provider;

const useRootNavigation = (): NavigationContainerRef<ParamListBase> =>
  useContext(RootNavigationContext) as NavigationContainerRef<ParamListBase>;

// Export all the necessary components.
export {
  resetNavigation,
  navigateTo,
  RootNavigationProvider,
  useRootNavigation,
  navigationRef,
};
