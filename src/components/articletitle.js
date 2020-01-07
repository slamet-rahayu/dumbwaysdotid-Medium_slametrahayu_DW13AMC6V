import React, { Component } from "react"
import { getArticleDetail } from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const query = new URLSearchParams(window.location.search)
const id = query.get('id')

class Articledetail extends Component {
    componentDidMount() {
    this.props.getArticleDetail(id)
    }
    render() {
        const {articledetail} = this.props.articles
        return(
            <container>
            <p style={{fontSize:"40px"}}>{articledetail.title}</p>
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
        getArticleDetail: bindActionCreators(getArticleDetail, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Articledetail);