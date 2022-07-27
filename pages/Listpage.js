import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import AddItem from '../components/AddItem';
import CustomModal from '../components/Modal';
import List from '../components/List';
import React from 'react'
import { useState } from 'react'

export const Listpage = () => {

  const [textItem, setTextItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});


  const onHandlerChangeItem = (text) => setTextItem(text)
  const onHandlerAddItem = () => {
    console.log('se agrego el item', textItem)
    setItemList(currentItems => [...currentItems, { id: Date.now(), value: textItem, completed: false }])
    setTextItem('')
  }

  const onHandlerDeleteItem = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.find(item => item.id === id))
    setModalVisible(!modalVisible)
  }

  const onHandlerCompleteItem = id => {
    let itemCompleted = itemList.findIndex((item) => item.id === id)
    itemList[itemCompleted].completed = true
    setItemList([...itemList])
    setModalVisible(!modalVisible)
  }

  return (

    <SafeAreaView>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <View style={styles.tittle}>

              <Text style={{ fontSize: 25, fontFamily: 'MontBold' }} > TO DO LIST ✏️ </Text>
            </View>
            <CustomModal
              modalVisible={modalVisible}
              onHandlerDeleteItem={onHandlerDeleteItem}
              itemSelected={itemSelected}
              onHandlerCompleteItem={onHandlerCompleteItem}
            />
            <AddItem
              textItem={textItem}
              onHandlerAddItem={onHandlerAddItem}
              onHandlerChangeItem={onHandlerChangeItem}
            />
            <List
              itemList={itemList}
              onHandlerModal={onHandlerModal}
            />
          </View>
        </TouchableWithoutFeedback>
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },

  tittle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,

  },
})