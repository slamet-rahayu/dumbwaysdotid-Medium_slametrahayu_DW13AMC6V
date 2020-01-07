import React, {Component} from 'react'
import axios from 'axios'
import { Navbar, Nav, Button, Form, } from 'react-bootstrap'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article_id: '1',
            user_id: '1',
            comment: ''
        }
        this.formHandler = this.formHandler.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }

    formHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    formSubmit(e) {
        axios.post('https://medium-express.herokuapp.com/api/v1/comment/store', {
            article_id: this.state.article_id,
            user_id: this.state.user_id,
            comment: this.state.comment
        })
    }
    
    render() {
        return(

            <form onSubmit={this.formSubmit}>
            <textarea className="comment-text"
            name="comment"
            onChange={this.formHandler} >
            </textarea>
            <Button variant="success" size="sm" type="submit"> Submit </Button>
            </form>
        )
    }
}

export default Comment