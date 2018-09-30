import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(24,24,24)'
    },
    imageContainer: {
        borderWidth: 1,
        borderColor: 'rgb(80,80,80)',
        borderRadius: 20,
        height: 200,
        width: '100%'
    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: '100%'
    },
    imageText: {
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        top: '50%',
        textAlign: 'center',
        left: 0,
        right: 0
    }
})