import styled from 'styled-components';
import * as icons from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div{
        display: flex;
        align-items: center;
    }

    > div span{
        font-size:15px;
        color: var(--senary);

        margin-left: 5px;
    }

    &.active, &:hover{
        background-color: var(--quinary);

        > div span{
            color: var(--white);
        }
    }
`;
export const InviteIcon = styled(PersonAdd)`
    width: 18;
    height: 18px;

    color: var(--symbol); 
    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;
export const HashTagIcon = styled(icons.Hashtag)`
   width: 20px;
   height: 20px;

   color: var(--symbol);
`;
export const SettingsIcon = styled(Settings)`
    width: 18px;
    height: 18px;

    margin-left: 4px;

    color: var(--symbol); 
    cursor: pointer;

    transition: color .2s;

    &:hover{
        color: var(--white);
    }
`;

