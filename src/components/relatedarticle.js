import React, { Component } from "react"
import { getCategoryDetaill } from '../_actions/articleaction'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bb from '../bookmark.png'
import Claps from '../claps.png'
import Andy from '../andy.jpeg'

const query = new URLSearchParams(window.location.search)
const id = query.get('id')

class Categorydetail extends Component {
    componentDidMount() {
    this.props.getCategoryDetaill(id)
    }
    render() {
        const {catdetaill} = this.props.articles
        return(
            <Row>
                {catdetaill.slice(0,3).map((s,k)=>{
                    return(
                    <Col>
                    <p>More from mission.org</p>
                    <img src={'https://medium-express.herokuapp.com/images/'+(s.image)} width="361" height="250"></img>
                <p style={{fontSize:"24px"}}>{(s.title).substring(0,50)} . . . </p>
                    <Row>
                        <Col>
                        <img src={Andy} alt="andy" style={{borderRadius:"100%"}}></img>
                        </Col>
                        <Col style={{marginLeft:"-30%"}}>
                        <p style={{fontSize:"12px",marginTop:"0",marginBottom:"0"}}>Andy Raskin in Mission.org</p>
                        <p style={{fontSize:"13px",marginTop:"0",marginBottom:"0"}}>Sep 15, 2016 · 8 min read</p>
                        </Col>
                        <Col style={{float:"right"}}>
                        <img src={Claps} width="30px" height="40px" style={{borderRadius:"100%"}}></img> 88K | 
                        <img src={Bb} alt="Bookmark" width="25px" height="25px"></img>
                        </Col>
                    </Row>
                    </Col>
                    )
                })}
            </Row>
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