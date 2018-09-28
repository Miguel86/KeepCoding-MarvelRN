import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class extends Component {

    static defaultProps = {
        comic: null,
        onComicPress: () => {},
    }

    render() {
        const { comic } = this.props
        const image = comic.thumbnail.path ? { uri: comic.thumbnail.path+'.'+comic.thumbnail.extension } : null
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onComicPress(comic) } 
                style={styles.cellContainer}>
               <Image
                    source={image}
                    style={{ width: '100%', height: '100%'}}
                    resizeMode={'stretch'}
                />
            </TouchableOpacity>
        )
    }
}