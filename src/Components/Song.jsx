import { Icon16MoreVertical } from '@vkontakte/icons';
import { IconButton, Image, RichCell, SimpleCell } from '@vkontakte/vkui';
import React from 'react';
import {getSongTime} from '../Hooks/getSongTime'

const Song = ({
    poster,
    author,
    title,
    seconds
}) => {

    const songTime = getSongTime(seconds)

    return (
        <SimpleCell size='l' 
        before={<Image size={88} borderRadius="l" src={poster} />}
        after={<SimpleCell after={<IconButton label='Подробнее'>
            <Icon16MoreVertical/>
        </IconButton>}>
        {songTime}
        </SimpleCell>}
        >
            <RichCell caption={author}>
                {title}
            </RichCell>
        </SimpleCell>
    );
}

export default Song;
