import React from 'react';


import { Container, Description, HashTagIcon, Separator, Title} from './styles';

const ChannelInfo: React.FC = () => {
    return (
       <Container>
           <HashTagIcon/>
           <Title>geral</Title>
           <Separator/>
           <Description>Canal aberto para conversas</Description>
       </Container> 
    )
};

export default ChannelInfo;