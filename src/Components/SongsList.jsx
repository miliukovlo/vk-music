import { observer } from 'mobx-react-lite';
import React from 'react';
import { useAppStore } from '../context/AppStoreProvider';

const SongsList = observer(() => {
    const appStore = useAppStore()

    console.log(appStore)

    return (
        <>
            {appStore.songs.map((song) => {
                return (
                    <div>
                        <h1>{song.title}</h1>
                        <h2>{song.author}</h2>
                        <img src={song.poster} alt='Постер к фильму' />
                    </div>
                )
            })}
        </>
    );
})

export default SongsList;
