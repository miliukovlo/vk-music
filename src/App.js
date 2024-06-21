import { Title } from '@vkontakte/vkui';
import React from 'react';
import { AppStoreProvider } from './context/AppStoreProvider';
import SongsList from './Components/SongsList';

const App = () => {

  return (
    <div>
      <Title level="1" style={{ marginBottom: 16 }}>Hello world!</Title>
      <AppStoreProvider>
        <SongsList/>
      </AppStoreProvider>
    </div>
  );
}

export default App;
