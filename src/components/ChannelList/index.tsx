import React from 'react';


import { AddCategoryIcon, Category, Container } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName="salao-comunal" />
            <ChannelButton channelName="grifinoria" />
            <ChannelButton channelName="corvinal" />
            <ChannelButton channelName="lufa-lufa" />
            <ChannelButton channelName="sonserina" />
        </Container>
    )
};

export default ChannelList;