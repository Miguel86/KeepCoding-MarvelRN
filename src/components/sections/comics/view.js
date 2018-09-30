import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { ComicCell  } from '../../widgets/'
import styles from './styles'
import { connect } from 'react-redux'
import * as ComicsActions from '../../../redux/comics/actions'
import { Actions } from 'react-native-router-flux'

class Comics extends Component {

    componentDidMount() {
        this.props.fetchComicsList()
    }

    _onComicTapped(comic) {
        this.props.onComicTapped(comic)
    }

    _renderItem({ item }) {
        return ( 
            <ComicCell 
                comic={item} 
                onComicPress={ v => this._onComicTapped(v) } 
            />
        )
    }

    _renderActivityIndicator(){
        if(!this.props.isFetching){
            return null
        }
        return (
            <View style={{alignItems:'center', justifyContent: 'center', position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor:'blue'}}>
                <ActivityIndicator size="small" color={'white'} animating={true} />
            </View>
            
        )
    }

    render() {
        console.log("this.props: ", this.props)
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.list}
                    renderItem={ value => this._renderItem(value) }
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.props}
                    numColumns={2}                
                />
                {this._renderActivityIndicator()}

                <Text style={{color: 'white'}}>{this.props.comic && this.props.comic.title}</Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state.comics.item: ", state.comics.item)
    return {
        isFetching: state.comics.isFetching,
        list: state.comics.list,
    }
} 

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchComicsList: () => {
            console.log("fetchComicsList called")
            dispatch(ComicsActions.fetchComicsList())
        },
        onComicTapped: (comic) => {
            console.log("onComicTapped comic: ", comic)
            dispatch(ComicsActions.setItem(comic))
            Actions.comicDetails({title: 'Detalles'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comics)