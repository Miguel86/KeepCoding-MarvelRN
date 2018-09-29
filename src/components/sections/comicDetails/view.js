import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'

export default class extends React.Component{
    render(){
        const {comic} = this.props
        console.log("Comic ", comic)
        const image = comic && comic.thumbnail.path ? { uri: comic.thumbnail.path+'.'+comic.thumbnail.extension } : null
        const title = comic && comic.title ? comic.title : ''
        const description = comic && comic.description ? comic.description : ''
        
        return (
            <View style={styles.comicContainer}>
                <Image source={image} resizeMode={'cover'} style={styles.image} />
                <View style={styles.dataContainer}>
                    <Text style={{color: 'white'}}>{title}</Text>
                </View>
                <Text style={{color: 'white'}}>{description}</Text>
            </View>
        )
    }
}