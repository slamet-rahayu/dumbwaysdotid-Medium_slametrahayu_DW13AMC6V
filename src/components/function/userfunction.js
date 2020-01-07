import axios from 'axios'

export const register = newUser => {
    return axios
      .post('http://localhost:8090/api/v1/register', {
        fullname: newUser.fullname,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      })
      .then(res => {
        console.log(res)
      })
  }