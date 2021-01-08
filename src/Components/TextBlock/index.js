import React from 'react';
import { TextBlock } from './Text.stc';

export const HandleText = (props) => {
    const {title} = props;
    return (
        <TextBlock>
            {title}
        </TextBlock>
    )
}

export default HandleText;