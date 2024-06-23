import { Div, Panel, PanelHeader, SplitLayout, Title, View, usePlatform } from '@vkontakte/vkui';
import React from 'react';
import { AppStoreProvider } from './context/AppStoreProvider';
import SongsList from './Components/SongsList';

const App = () => {

  const platform = usePlatform()

  return (
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <View activePanel="div">
          <Panel id="div">
            <PanelHeader>
              <Title level="1" weight='1'>Песни</Title>
            </PanelHeader>
              <Div>
                <AppStoreProvider>
                  <SongsList/>
                </AppStoreProvider>
              </Div>
          </Panel>
        </View>
      </SplitLayout>
  );
}

export default App;
