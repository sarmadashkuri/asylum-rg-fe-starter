import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import LandingContainer from './pages/Landing/LandingContainer';

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <>
        <LandingContainer />
      </>
    ),
  });

  return <Component />;
};
