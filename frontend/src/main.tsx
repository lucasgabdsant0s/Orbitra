import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from './app/router';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AppProviders } from './providers/AppProviders';
import './index.css';
import './lib/i18n';
import { SplashScreen } from './components/SplashScreen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProviders>
        <SplashScreen />
        <AppRouter />
      </AppProviders>
    </ErrorBoundary>
  </React.StrictMode>,
);
