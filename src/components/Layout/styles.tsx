import styled from 'styled-components';

//SERVER LIST - SL
//SERVER NAME - SN
//CHANNEL INFO - CI
//CHANNEL LIST - CL
//CHANNEL DATA - CD
//USER LIST - UL
//USER INFO - UI
export const Grid = styled.div`
    display: grid;

    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;

    grid-template-areas:
        'SL SN CI CI' 
        'SL CL CD UL' 
        'SL UI CD UL'
    ;
    height: 100vh;
`;
