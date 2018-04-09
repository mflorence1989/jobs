import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario'
    }
  }

  render () {
    return(<div>this is the homepage</div>)

  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
