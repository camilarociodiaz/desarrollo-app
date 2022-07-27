import { Button, Modal, StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import { useWindowDimensions } from 'react-native';

export default function CustomModal(props) {

    const { modalVisible, itemSelected, onHandlerDeleteItem, onHandlerCompleteItem } = props

    const { height, width } = useWindowDimensions();


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            supportedOrientations={['portrait', 'landscape']}

        >
            <View style={styles.modal}>
                <View style={{...styles.modalView, height: height > 600 ? '30%' : '70%'}}>
                    <View style={styles.modalTitle}>
                        <Text>
                            To do list
                        </Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}> Que desea hacer con esta actividad?</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalItem}>{itemSelected.value}</Text>
                    </View>
                    <View style={styles.modalButton}>

                        <Button color={Colors.primary} onPress={() => onHandlerCompleteItem(itemSelected.id)} title='Completar' />
                        <Button color={Colors.primary} onPress={() => onHandlerDeleteItem(itemSelected.id)} title='Borrar' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 0,
        padding: 0,
    },

    modalView: {
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 10,
        padding: '5%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
    },
    modalTitle: {

    },
    modalMessage: {
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,

    },
    modalButton: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    modalItem: {
        fontSize: 30,
        backgroundColor: "#edebeb",
        padding: 5,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10,
        color: '#ff5c5c',
    }
})