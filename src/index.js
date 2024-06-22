import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider appearance='dark'>
      <AdaptivityProvider>
        <AppRoot>
          <App />
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
);
