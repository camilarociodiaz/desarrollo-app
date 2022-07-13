import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function List(props) {

    const { itemList, onHandlerModal } = props
    console.log(itemList)
    return (
        <FlatList 
            data={itemList}
            renderItem={data => (
                <TouchableOpacity onPress={() => onHandlerModal(data.item.id)} style={styles.item}>
                    <Text style={{textDecorationLine: data.item.completed ? 'line-through' : null}}> ✏️   {data.item.value}</Text>
                </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    item: {
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#edebeb', 
        borderRadius: 10,
        marginTop: '7%',
        height: 40,
        padding: 5,
    
    }
})