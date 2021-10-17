import React from 'react';
import styled from 'styled-components/native';

const ListaItemSwipe = styled.TouchableHighlight`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    justify-content: center;
`;

const ListaItemIcon = styled.View`
    width: 18px;
    height: 13px;
    background-color: #FF9933;
    margin-left: 15px;
`;

export default (props) => {
    return (
        <ListaItemSwift onPress={props.onDelete} underlayColor="#335CFF">
            <ListaItemIcon>

            </ListaItemIcon>
        </ListaItemSwift>
    );
}