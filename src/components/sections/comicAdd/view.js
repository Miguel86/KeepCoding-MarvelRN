import React, {Component} from 'react'
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native'
import {Button, TextInput} from '../../widgets'
import styles from './styles'
import ImagePicker from 'react-native-image-picker'

export default class extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            description: '',
            image: null
        }

        var options = {
            title: 'Select image',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            }
          };
    }
    _validateForm() {
        const {title, description, image} = this.state 

        console.log("Title: "+title+" - Description: "+ description+" - Image: "+image)
        if(title && description && image) {
            return true
        } else {
            return false
        }
    }
     _onSubmit() {
        if(this._validateForm()) {
            const {title, description, image} = this.state 
            const data = {
                title: title,
                description: description, 
                image: image.data,
            }
            this.props.onSubmitComic(data)
        } else {
            Alert.alert('Atención', 'Complete todos los campos')
        }
    }
    _onImagePickerTapped() {
        ImagePicker.showImagePicker(this.options, (response) => {
            if (response.uri && response.data) {
              let preview = { uri: response.uri };
              let data = 'data:image/jpeg;base64,' + response.data 
              this.setState({
                image: { preview, data }
              });
            }
          });
    }

    _renderTextInput(label, key, placeholder=''){
        return (
            <TextInput
                label={label}
                value={this.state[key]}
                onChangeText={v => this.setState({ [key]: v })}
                placeholder={placeholder}
            />
        )
    }

    _renderImageInput(){
        console.log("_renderImageInput: "+this.state.image)
        const imageUri = this.state.image ? this.state.image.preview : null
        const imageLabel = this.state.image ? 'Pulsa para escoger otra imagen' : 'Pulsa para elegir imagen *'

        return (
            <View>
                <TouchableOpacity style={styles.imageContainer} onPress={() => this._onImagePickerTapped()}>
                    <Image source={imageUri} style={styles.image} resizeMode={'contain'}/>
                    <Text style={styles.imageText}>{imageLabel}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={{padding: 20, paddingTop: 40}}>
                    {this._renderTextInput('Title *', 'title', 'Comic demo')}
                </View>
                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <TextInput
                        label={'Description *'}
                        value={this.state.description}
                        onChangeText={description => this.setState({description})}
                        placeholder={'Comic description'}

                        inputStyle={{height: 90}}
                    />
                </View>
                <View style={{paddingHorizontal:20, paddingBottom:40}}>
                    {this._renderImageInput()}
                </View>
                <View style={{paddingHorizontal: 20, paddingBottom: 20}}>
                    <Button label={'Guardar'.toUpperCase()} onPress={() => this._onSubmit()}/>
                </View>
            </View>
        )
    }
}