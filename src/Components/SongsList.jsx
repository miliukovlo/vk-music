import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAppStore } from '../context/AppStoreProvider';
import Song from './Song';

const SongsList = observer(() => {
    const appStore = useAppStore()

    console.log(appStore)

    return (
        <>
            {appStore.songs.map((song) => {
                return (
                        <Song
                            title={song.title}
                            poster={song.poster}
                            seconds={song.seconds}
                            author={song.author}
                        />
                )
            })}
        </>
    );
})

export default SongsList;
