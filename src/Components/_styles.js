import styled from 'styled-components'
import { IconButton } from '@mui/material';

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    position: relative;
    margin-bottom: 40px;
`;

export const MainContainerScroll = styled(MainContainer)`
    height: 300px;
    margin-bottom: 0;
`;

export const TableContainer = styled.div`
    width: calc(100% - 500px);
`;

export const LangContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const SettingsContainer = styled.div`
    margin: 30px;
`;

export const ImportContainer = styled.div`
    width: calc(100% - 500px);
    display: flex;
    justify-content: center;
    margin: 20px;
`;

export const BlockContainer = styled.div`
    display: block;
`;

export const BtnToInput = styled.div`
    position: absolute;
    bottom: 0;
`;

export const Title = styled.h4`
    height: 50px;
    margin: 0 30px 30px;
`;

export const SmallTitle = styled(Title)`
    margin: 0;
`;

export const FlexContainer = styled.div`
    display: flex;
`

export const FileInputContainer = styled.div`
    justify-content: center;
    display: flex;
`;

export const ArrowIcon = styled.div`
    color: black;
    width: 20px;
    height: 30px;
    background-color: red;
`;