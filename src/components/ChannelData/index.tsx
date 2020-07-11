import React from 'react';


import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>

            </Messages>
            <InputWrapper>
                <Input />
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;