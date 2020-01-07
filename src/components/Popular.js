import React, { Component } from "react"
import { latestArticle } from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import { BrowserRouter as Router } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

let number = 1

class Popular extends Component {
    componentDidMount() {
    this.props.latestArticle()
    }
    render() {
        const {latestdata} = this.props.articles
        return(
            <container>
            {latestdata.map((s,kk)=>{
                return(
                <text>{s.articles.map((p,k)=>
                    <Row>
                        <Col>
                        <p style={{color:"grey",fontSize:"30px"}}>{number++}</p>
                        </Col>
                        <Col>
                        <p style={{marginLeft:"-90%",marginTop:"6%"}}><b><a href={'http://localhost:3000/articledetail?id='+(p.id)+'&cat='+(s.id)}>{p.title}</a></b></p>
                        <p style={{fontSize:"13px",marginLeft:"-90%",marginTop:"-10%"}}>{s.username} in OneZero</p>
                        <p style={{fontSize:"12px",marginLeft:"-90%",marginTop:"-10%"}}>{p.createdAt} . 6 min read</p>
                        </Col>
                    </Row>
                    )}</text>
                )
            })}
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
        latestArticle: bindActionCreators(latestArticle, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Popular);