import React, { Component } from "react"
import { getCategoryDetaill } from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const query = new URLSearchParams(window.location.search)
const id = query.get('id')

class Categorydetail extends Component {
    componentDidMount() {
    this.props.getCategoryDetaill(id)
    }
    render() {
        const {catdetaill} = this.props.articles
        return(
            <container>
                {catdetaill.map((s,k)=>{
                    return(
                    <text>
                    <hr></hr>
                    <Row>
                    <Col lg={9}>
                    <p style={{fontSize:"20px"}}>{s.title}</p>
                        <p style={{fontSize:"18px",display:"inline"}}>{(s.content).substring(0,150)}</p>
                        </Col>
                        <Col lg={3}>
                        <img width="242" height="163" src={'http://localhost:8090/images/'+(s.image)} alt="Ps"></img>
                        </Col>
                    </Row>
                    </text>
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
        getCategoryDetaill: bindActionCreators(getCategoryDetaill, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Categorydetail);