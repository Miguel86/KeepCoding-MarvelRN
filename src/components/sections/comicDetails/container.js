import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    console.log("Container mapStateToProps: "+state.comics.item)
    return {
        comic: state.comics.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)