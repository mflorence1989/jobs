import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario'
    }
  }

  loopCategories = () => {
    let testArray = [1,2,3,4,5,6,7]
    return testArray.map((item, i) => {
      return (
        <div key={i} className="categories">

      <div className="title">Community</div>
      <div className="group-links">
      <a href="#" className="link">Community</a>
      <a href="#" className="link">General</a>
      <a href="#" className="link">Activities</a>
      <a href="#" className="link">Artists</a>
      <a href="#" className="link">Local News</a>
      <a href="#" className="link">Child Care</a>
      <a href="#" className="link">Lost & Found</a>
      <a href="#" className="link">Classes</a>
      <a href="#" className="link">Musicans</a>
      <a href="#" className="link">Events</a>
      <a href="#" className="link">Pets</a>
      </div>
      </div>

      )
    })
  }

  loopTags = () => {
    let testTags = [1,2,4,2,]
    return testTags.map((item, j) => {
      return(<div key={j}className="tag">MacBook</div>)
    })
  }


  render () {

      return(
        <div className="home">
        <div className="container">
        <h1>Connecting People <i className="far fa-smile"></i>  </h1>
        <section className={'links'}>
        {this.loopCategories()}
        </section>
        <section className={'trending'}>
        <input type="text" name="search" className="search"/>
        <div className="title">
        <i className="far fa-clock"></i>Trending Now
        </div>
        <div className="trending-tags">
        {this.loopTags()}
        </div>
        </section>
        </div>
        </div>
      )

  }
}
