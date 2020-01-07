import React, { Component } from "react";
import { getArticle, getArticlePending } from '../_actions/articleaction';
import { connect } from 'react-redux'
import axios from 'axios'

class Elemental extends Component {
    componentDidMount() {
    this.props.dispatch(getArticlePending())
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => {
    this.props.dispatch(getArticle(res.data)); //Fire ACT FULLFILED
    });
    }
    render() {
        const {data, isLoading} = this.props.article
        if(isLoading) {
            return(
              <div>
                <h1>loading please wait</h1>
              </div>
            )
          }
        return(
            <container>
                <h1>{data.map((s,k)=> {
                    return(
                <p key={k}>{s.title}</p>
                    )
                })}</h1>
            </container>
        )
    }
    }

const mapstateToProps = state => {
    return{
        article: state.article
    }
}

export default connect(mapstateToProps)(Elemental);