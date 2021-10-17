import React, { useState } from 'react';
import styled from 'styled-components/native';

const BoxItemArea = styled.View`
    background-color: #EEE;
    padding: 10px;
`;

const AddItemInput = styled.TextInput.attrs({
    placeholderTextColor: "#EEE"
})`
    background-color: #EEE;
    color: #EEE;
    font-size: 15px;
    height: 50px;
    border-radius: 5px;
    padding: 10px;
`;

export default (props) => {
    const [item, setItem] = useState('');
    const handleSubmit = () => {
        if (item.trim() != '') {
            props.onAdd(item.trim());
            setItem('');
        }
    }

return (
    <BoxItemArea>
        <AddItemInput
            placeholder="Digite uma nova tarefa"
            value={item}
            onChangeText={e => setItem(e)}
            onSubmitEditing={handleSubmit}
            returnKeyType="send"
        />
    </BoxItemArea>
);

}