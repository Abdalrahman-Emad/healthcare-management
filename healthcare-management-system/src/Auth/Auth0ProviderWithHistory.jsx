import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate();

  return (
<Auth0Provider
  domain="dev-erxtvy0x812w0t0t.us.auth0.com"
  clientId="0gP18L5CfxZjPGxxsl218SSYcqP0pY17"
  authorizationParams={{ redirect_uri: window.location.origin }}
  onRedirectCallback={(appState) => {
    navigate(appState?.returnTo || window.location.pathname);
  }}
>
  {children}
</Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
