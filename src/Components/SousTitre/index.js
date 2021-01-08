import React from 'react';
import { SousTitre } from './SousTitre.stc';

export const HandleSousTitle = (props) => {
    const {title} = props;
    return (
        <SousTitre>
            {title}
        </SousTitre>
    )
}

export default HandleSousTitle;