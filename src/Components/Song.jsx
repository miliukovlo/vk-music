import { Icon16MoreVertical } from '@vkontakte/icons';
import { IconButton, Image, RichCell, SimpleCell } from '@vkontakte/vkui';
import React, { useState } from 'react';
import {getSongTime} from '../Hooks/getSongTime'
import '../styles/songStyles.css'
import song from '../song/song.mp3'

const Song = React.memo(({
    poster,
    author,
    title,
    seconds
}) => {

    const songTime = getSongTime(seconds)
    const [isPlay, setIsPlay] = useState(false)


    const [currentTime, setCurrentTime] = useState(0); // Добавляем состояние для текущего времени воспроизведения
    const currentTimeVisible = getSongTime(currentTime)

    // Функция для начала воспроизведения
    const playAudio = () => {
        const audioElement = document.querySelector('audio')
        if (!audioElement) return
        if (!isPlay) {
            audioElement.currentTime = currentTime
            audioElement.play()
            setIsPlay(true)
        } else {
            audioElement.pause()
            setIsPlay(false)
        }
    }
    const updateTime = () => {
        const audioElement = document.querySelector('audio')
        const setTime = Math.floor(audioElement.currentTime)
        if (currentTime < seconds) {
                setCurrentTime(setTime)
        } else {
            setCurrentTime(0)
        }
    }
    return (
        <SimpleCell size='l'
        before={<Image onClick={playAudio} className='image-hover' size={88} borderRadius="l" src={poster} />}
        after={<SimpleCell after={<IconButton label='Подробнее' className='button-hover'>
            <Icon16MoreVertical/>
        </IconButton>}>
        <audio controls onTimeUpdate={updateTime} ref={node => node && node.controls === false} hidden={true}>
            <source src={song} type='audio/mpeg'/>
        </audio>
        {isPlay ? currentTimeVisible : songTime}
        </SimpleCell>}
        >
            <RichCell caption={author}>
                {title}
            </RichCell>
        </SimpleCell>
    );
})

export default Song;
