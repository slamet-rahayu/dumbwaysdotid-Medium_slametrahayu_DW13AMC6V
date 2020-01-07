import React, { Component } from "react";
import { getArticle, getArticlePending} from '../_actions/articleaction';
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

class Elemental extends Component {
    componentDidMount() {
    this.props.getArticlePending()
    this.props.getArticle()
    }
    render() {
        const {data, isLoading} = this.props.article
        if(isLoading){
            return(
                <div>
                    <h1>Loading</h1>
                </div>
            )
        }
        return(
            <container>
                <h1>{data.map(s=>
                <p key={s.id}>{s.name}</p>
                    )}</h1>
            </container>
        )
    }
    }

const mapstateToProps = state => {
    return{
        article: state.article
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getArticle: bindActionCreators(getArticle, dispatch),
        getArticlePending: bindActionCreators(getArticlePending, dispatch)
    }
}

export default connect(mapstateToProps, mapDispatchToProps)(Elemental);