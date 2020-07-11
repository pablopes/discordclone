import styled from 'styled-components';
import { Headset, Mic, Settings } from 'styled-icons/material';

export const Avatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--grey);
`;
export const Container = styled.div`
 grid-area: UI;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

padding: 10px;
background-color: var(--quaternary);
box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0ex;
`;
export const HeadphoneIcon = styled(Headset)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;
export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    > svg:not(:first-child){
        margin-left: 7px;
    }

`;
export const MicIcon = styled(Mic)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;
export const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

`;
export const SettingsIcon = styled(Settings)`
    width: 20px;
    height: 20px;

    color: var(--white);
    opacity: .7;
    cursor: pointer;

    transition: opacity .2s;

    &:hover{
        opacity: 1;
    }
`;
export const UserData = styled.div`
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    > strong{
        font-size: 13px;
        font-weight: bold;
        color: var(--white);
        display: block;
    }
    
    > span{
        font-size: 13px;
        color: var(--grey);
    }

`;
