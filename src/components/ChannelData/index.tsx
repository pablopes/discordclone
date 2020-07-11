import React, {useEffect, useRef} from 'react';

import { Container, Input, InputIcon, InputWrapper, Messages } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef])
    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author="Lord Voldemort"
                    date="11/07/2020"
                    content={
                        <>
                            Vou pegar o <Mention>@Harry Potter</Mention> na saída da aula de poções.
                        </>
                    }
                    isBot
                    hasMention
                />
                <ChannelMessage
                    author="Severo Snape"
                    date="11/07/2020"
                    content="Não quero bagunça na minha sala, Potter."
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="11/07/2020"
                    content="Não farei, professor Snape. Posso ficar na sua sala após o horário para praticar?"
                />
                <ChannelMessage
                    author="Severo Snape"
                    date="11/07/2020"
                    content="Sua inutilidade me irrita, Potter."                   
                />
                <ChannelMessage
                    author="Alvo Dumbledore"
                    date="11/07/2020"
                    content="Não se preocupe Harry, o Voldemort não está no castelo. Venha a minha sala após a aula."
                    isBot
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="11/07/2020"
                    content="Sim senhor, estarei lá."
                />
                <ChannelMessage
                    author="Harry Potter"
                    date="11/07/2020"
                    content="Ou pelo menos é o que espero..."
                />
                <ChannelMessage
                    author="Draco Malfoy"
                    date="11/07/2020"
                    content="Olhaaaa um dementador..."
                />
                <ChannelMessage
                    author="Ron Weasley"
                    date="11/07/2020"
                    content={
                        <>
                            Voce não tem o que fazer <Mention>@Draco Malfoy</Mention>?
                        </>
                    }
                />
                <ChannelMessage
                    author="Severo Snape"
                    date="11/07/2020"
                    content="Menos 10 pontos para Grifinória."                   
                />
                <ChannelMessage
                    author="Hermione Granger"
                    date="11/07/2020"
                    content="Mas é injusto..."                   
                />
                <ChannelMessage
                    author="Severo Snape"
                    date="11/07/2020"
                    content="Quer perder mais 10 senhorita Granger?"                   
                />
            </Messages>
            <InputWrapper>
                <Input type="text" placeholder="Deixe sua coruja descansar, converse na #sala-comunal!!!" />
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;