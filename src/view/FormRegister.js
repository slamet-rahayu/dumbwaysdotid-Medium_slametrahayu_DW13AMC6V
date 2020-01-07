import React, { Component } from 'react'
import axios from 'axios'

class FormRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: '',
            email: '',
            password: ''
        }
        this.formHandler = this.formHandler.bind(this)
        this.formSubmit = this.formSubmit.bind(this)
    }
    formHandler(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    formSubmit(e) {
        e.preventDefault()
        axios.post('https://medium-express.herokuapp.com/api/v1/register', {
            fullname: this.state.fullname,
            username: '@'+this.state.fullname,
            email: this.state.email,
            password: this.state.password
        })
    }
    render() {
        return(
            // <form onSubmit={this.formSubmit}>
            // <input type="text"
            //  name="fullname"
            //  onChange={this.formHandler}
            //   value={this.state.fullname}
            //    placeholder="fullname" /> 
            // <input type="email"
            //  name="email"
            //   onChange={this.formHandler}
            //    value={this.state.email}
            //     placeholder="email" />
            // <input type="password"
            //  name="password"
            //   onChange={this.formHandler}
            //    value={this.state.password}
            //     placeholder="password" />  
            // <button type="submit">submit</button>
            // </form>
            <form onSubmit={this.formSubmit}>
            <label>Fullname</label>
            <input type="text"
             placeholder="&#128712;"
             style={{border:"none",borderBottom:"2px solid grey"}}
             name="fullname"
             onChange={this.formHandler}
             value={this.state.fullname}
            ></input><br></br><br></br>
            <label>E-mail &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email"
            placeholder="&#128712;"
            style={{border:"none",borderBottom:"2px solid grey"}}
            name="email"
            onChange={this.formHandler}
            value={this.state.email}
            ></input><br></br><br></br>
            <label>Password</label>
            <input type="password"
             placeholder="&#128712;"
             style={{border:"none",borderBottom:"2px solid grey"}}
             name="password"
             onChange={this.formHandler}
             value={this.state.password}
             ></input><br></br><br></br>
            <button className="btn btn-dark" type="submit">Registration</button><br></br><br></br><br></br>
        </form>
        )
    }
}

export default FormRegister