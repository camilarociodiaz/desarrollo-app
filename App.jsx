import { StyleSheet, View, TextInput, Text, Button, FlatList, TouchableOpacity }  from 'react-native';
import { useEffect, useState } from 'react'
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

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
  <View style={styles.screen}>
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}>

      <View style={styles.modal}>
        <View style={styles.modalView}>
          <View style={styles.modalTitle}>
            <Text> Mi modal  </Text>
          </View>

          <View style={styles.modalMessage}>
            <Text> ¿Estas seguro que deseas borrar? </Text>
          </View>

          <View style={styles.modalMessage}>
            <Text style={styles.modalItem}> {itemSelected.value} </Text>
          </View>

          <View style={styles.modalButton}>
            <Button onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Confirmar' />
          </View>
        </View>

      </View>
    </Modal>

    <View style={styles.container}>
      <TextInput
        placeholder='Escribe aqui'
        style={styles.input}
        value={textItem}
        onChangeText={onHandlerChangeItem}
      />
      <Button title='Agregar' style={styles.button} onPress={onHandlerAddItem} disabled={TextInputComponent.length < 1 ? true : false} />
    </View>

    <FlatList
      data={itemList}
      renderItem={data => (

        <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
          <Text> {data.item.value}</Text>
        </TouchableOpacity>

      )}

      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  </View>
);

      }
      



const styles = StyleSheet.create({

  screen: {

},

input: {
  width: '80%',
  height: 50,
  borderColor: 'black',
borderWidth: 1,
},

item: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'black',
  borderRadius: 10,
  marginTop: '10%',
  height: 50,
},



});

