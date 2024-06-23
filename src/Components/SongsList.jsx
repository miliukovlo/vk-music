import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAppStore } from '../context/AppStoreProvider';
import Song from './Song';
import { Group } from '@vkontakte/vkui';

const SongsList = observer(() => {
    const appStore = useAppStore()

    console.log(appStore)

    return (
        <>
            {appStore.songs.map((song) => {
                return (
                    <Group style={{margin: '100px'}} padding='m'>
                        <Song
                            title={song.title}
                            poster={song.poster}
                            seconds={song.seconds}
                            author={song.author}
                        />
                    </Group>
                )
            })}
        </>
    );
})

export default SongsList;
