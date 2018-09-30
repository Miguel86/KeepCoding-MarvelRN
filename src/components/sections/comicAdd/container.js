import View from './view'
import { connect } from 'react-redux'
import * as ComicActions from '../../../redux/comics/actions'
const mapStateToProps = (state) => {

    return {
        isFetching: state.comics.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmitComic: (data) => {
            dispatch(ComicActions.postComic())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)

