import React from 'react'
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native'
import styles from './styles'
import { Button } from '../../widgets'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            imageExpanded: true,
            animatedHeight: new Animated.Value(400),
            marginTopText: 0
        }
    }
    _onShowImage(){
        console.log("show animatedHeight value: "+ this.state.animatedHeight._value)
        if(this.state.imageExpanded){
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 0,
                    duration: 500,
                }
            ).start()
            this.setState({imageExpanded: false})
            this.setState({marginTopText: 40})
        }
        else{
            Animated.timing(
                this.state.animatedHeight,
                {
                    toValue: 400,
                    duration: 500,
                }
            ).start()
            this.setState({imageExpanded: true})
            this.setState({marginTopText: 0})
        }
    }
    render(){
        const {comic} = this.props
        console.log("Comic ", comic)
        const image = comic && comic.thumbnail.path ? { uri: comic.thumbnail.path+'.'+comic.thumbnail.extension } : null
        const title = comic && comic.title ? comic.title : ''
        const description = comic && comic.description ? comic.description : ''
        
        return (
            <View style={styles.comicContainer}>
                    <Animated.Image source={image} resizeMode={'cover'} style={[styles.image, {height: this.state.animatedHeight}]} />
                    <TouchableOpacity style={styles.dataContainer} onPress={() => this._onShowImage()}>
                        <View>
                            <Text style={{color: 'white'}}>{title}</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <Text style={[styles.description, {marginTop: this.state.marginTopText}]}>{description}</Text>     
            </View>
        )
    }
}