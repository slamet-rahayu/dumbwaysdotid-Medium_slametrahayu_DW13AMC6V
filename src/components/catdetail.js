import React, { Component } from "react"
import { getCategoryDetail} from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"

const query = new URLSearchParams(window.location.search)
const id = query.get('id')

class Categorydetail extends Component {
    componentDidMount() {
    this.props.getCategoryDetail(id)
    }
    render() {
        const {catdetail} = this.props.articles
        return(
            <container>
                {catdetail.name}
            </container>
        )
    }
    }

const mapstateToProps = state => {
    return{
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCategoryDetail: bindActionCreators(getCategoryDetail, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Categorydetail);