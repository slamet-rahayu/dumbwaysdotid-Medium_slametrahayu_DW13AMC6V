import React, { Component } from "react"
import { getArticle} from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { BrowserRouter as Router } from 'react-router-dom'

class Category extends Component {
    componentDidMount() {
    this.props.getArticle()
    }
    render() {
        const {data} = this.props.articles
        return(
            <container>
                <table cellPadding="20">
                    <tr>
                        <Router>
                        <td>&lt;</td>
                        {data.map((s,k)=> {
                            return(
                            <td key={k}><a href={'/categorydetail?id='+(s.id)}>{s.name}</a></td>
                            )
                        })}
                        <td>&gt;</td>
                        </Router>
                    </tr>
                </table>
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
        
        getArticle: bindActionCreators(getArticle, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Category);