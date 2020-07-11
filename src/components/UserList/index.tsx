import React from 'react';
import { Avatar, Container, Role, User } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>

    );
};
const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname="Pablo Lopes" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Alvo Dumbledore" isBot />
            <UserRow nickname="Lord Voldemort" isBot />
            <UserRow nickname="Harry Potter" />
            <UserRow nickname="Hermione Granger" />
            <UserRow nickname="Ron Weasley" />
            <UserRow nickname="Alastor Moody" />
            <UserRow nickname="Andromeda Tonks" />
            <UserRow nickname="Bellatrix Lestrange" />
            <UserRow nickname="Cassandra Trelawney" />
            <UserRow nickname="Cedric Diggory" />
            <UserRow nickname="Draco Malfoy" />
            <UserRow nickname="Lúcio Malfoy" />
            <UserRow nickname="Rubeus Hagrid" />
            <UserRow nickname="Severo Snape" />
            <UserRow nickname="Minerva McGonagall" />
        </Container>
    )
};

export default UserList;