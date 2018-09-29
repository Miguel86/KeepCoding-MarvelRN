import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    comicContainer: {
        flex: 1,
        backgroundColor: 'rgb(52,52,52)'
    },
    image:{
        width: '100%',
        height: 400,
    },
    dataContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        alignItems: 'flex-end',
        padding: 8,
        backgroundColor: 'rgba(52,52,52, 0.8)'
    },
    text: {
        textAlign: 'right',
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})