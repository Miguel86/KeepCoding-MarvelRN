import React, { Component } from 'react'
import { StatusBar, TouchableOpacity, Text } from 'react-native'
import { Router, Scene, Stack, Actions } from 'react-native-router-flux'
import { Comics, ComicDetails, ComicAdd } from './sections/'
import * as api from '../api/'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk' 

import * as reducers from '../redux/'
const reducer = combineReducers(reducers)
const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
)

const sceneDefaultStyles = {
    navigationBarStyle: {backgroundColor: 'rgb(24,24,24)'},
    backButtonTintColor: 'white',
    backButtonTextStyle: {color: 'white'},
    titleStyle:{ color: 'white' },
}

const RightButton = props => (
    <TouchableOpacity style={{padding: 10}} onPress={() => Actions.comicAdd()}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{'Añadir'}</Text>
    </TouchableOpacity>
)


export default class App extends Component {
 
    componentWillMount() {
        api.configureAxios()
        StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Stack key="root">
                        <Scene key="comics" component={Comics} initial={true} 
                        {...sceneDefaultStyles}
                        titleStyle={{color: 'red'}}
                        renderRightButton={RightButton}
                        />
                        <Scene key="comicDetails" component={ComicDetails} {...sceneDefaultStyles}/>
                        <Scene key="comicAdd" component={ComicAdd} title={'Añadir'} {...sceneDefaultStyles} />
                    </Stack>
                </Router>
            </Provider>
        )
    }
}