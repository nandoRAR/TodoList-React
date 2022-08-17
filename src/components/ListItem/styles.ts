import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;

`;

export const Label = styled.div`
    flex: 1;
    color: #CCC;
    text-decoration: initial;
    word-break: break-all;
    margin-right: 5px;
`;
export const Input = styled.input`
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor: pointer;
`;
export const IconEditArea = styled.div`
    cursor: pointer;
`;
export const IconDeleteArea = styled.div`
    cursor: pointer;
`;