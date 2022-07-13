import { Button, StyleSheet, TextInput, View } from 'react-native'

export default function AddItem(props) {

    const { textItem, onHandlerChangeItem, onHandlerAddItem } = props

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Escriba aqui' 
                style={styles.input} 
                value={textItem}
                onChangeText={onHandlerChangeItem}  
            />
            <Button color="#ff5c5c" title='Agregar'onPress={onHandlerAddItem} disabled={textItem.length < 1 ? true : false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'  
    },
    input: {
        width: '70%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5, 
        padding: 5,
        
    },

})