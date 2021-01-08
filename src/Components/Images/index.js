import React from 'react';
import { ImageFx } from './Img.stc';

export const HandleImg = (props) => {
    const {title} = props;
    return (
        <ImageFx>
            {title}
        </ImageFx>
    )
}

export default HandleImg;