import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import AddItemArea01 from '../components/AddItemArea01';
import ListaItems01 from '../components/ListaItems01';
import lista from '../ListaTarefas/tarefas';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';
import { SwipeListView } from 'react-native-swipe-list-view';
import ListaItemSwipe01 from '../components/ListaItemSwipe01';

const Page = styled.SafeAreaView`
  flex: 1;
`;

const Listagem = styled.FlatList`
  flex: 1;
`;

const Text = styled.Text`
  color: #EEE;
`;

export default () => {
    const [items, setItems] = useState(lista);
    const [taskTrue, setTaskTrue] = useState(items.filter(item => item.done == true).length);
    const [taskFalse, setTaskFalse] = useState(items.filter(item => item.done == false).length);

const addNewItem = (txt) => {
    let newItems = [...items];
    newItems.push({
        id: uuidv4(),
        task: txt,
        done: false
    });
    setItems(newItems);
}

const toggleDone = (index) => {
    let newItems = [...items];
    newItems[index].done = !newItems[index].done;
    setItems(newItems);
}

useEffect(() => {
  setTaskTrue (items.filter (item => item.done == true).length);
}, [items]);

useEffect(() => {
  setTaskTrue (items.filter (item => item.done == false).length);
}, [items]);

const deleteItem = (index) => {
  let newItems = [...items];
  newItems.splice(index, 1);
  setItems(newItems);
}

return (
  <Page>
    <AddItemArea onAdd={addNewItem} />
    <SwipeListView
      data={items}
      renderItem={({ item, index }) => <ListaItem onPress={() => toggleDone(index)} data={item} />}
      leftOpenValue={40}
      disableLeftSwipe={true}
      renderHiddenItem={({item, index}) => <ListaItemSwipe onDelete={()=>deleteItem(index)}/>}
    />
   <Text>Tarefas Cumpridas: {taskTrue} / Tarefas não Cumpridas: {taskFalse}</Text>
  </Page>
 )
}