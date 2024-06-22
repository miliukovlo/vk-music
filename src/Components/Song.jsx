import { Icon16MoreVertical } from '@vkontakte/icons';
import { IconButton, Image, RichCell, SimpleCell, HorizontalCell } from '@vkontakte/vkui';
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
        <HorizontalCell size='l' >
            <Image size={88} borderRadius="l" src={poster} />
            <RichCell caption={author}>
                {title}
            </RichCell>
            <SimpleCell after={<IconButton label='Подробнее'>
                <Icon16MoreVertical/>
            </IconButton>}>
            {songTime}
            </SimpleCell>
        </HorizontalCell>
    );
}

export default Song;
