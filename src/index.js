import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initAxios } from './services/axios';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-uxpd4vq5.us.auth0.com"
      clientId="vrhhATTzeuFOgrt0fP27DaYsjWpf3O50"
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
  () => initAxios()
);