import * as types from './types'

function setFetching(value) {
    return {
        type: types.COMICS_SET_FETCHING,
        value: value
    }
}

export function setList(value) {
    return {
        type: types.COMICS_UPDATE_LIST,
        value,
    }
}

export function setItem(value) {
    return {
        type: types.COMICS_SET_ITEM,
        value
    }
}

export function fetchComicsList() {
    return (dispatch, getState, api) => {
        console.log("Actions fetchComicsList called")
        dispatch(setFetching(true))
        api
            .fetchComics()
            .then( res => {
                console.log("fetchComicsList res: ", res)
                dispatch(setFetching(false))
                dispatch(setList(res.data.data.results))
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchComicsList error: ", err)
            })  
    }
}
