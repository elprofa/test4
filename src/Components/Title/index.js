import React from 'react';
import { TitleSection } from './Title.stc';

export const HandleTitle = (props) => {
    const {title} = props;
    return (
        <TitleSection>
            {title}
        </TitleSection>
    )
}

export default HandleTitle;