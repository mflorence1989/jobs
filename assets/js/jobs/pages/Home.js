import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Mario',
      categoriesData: ''

    }
  }
componentWillMount(){

  }
  componentDidMount(){
    const {match, history} = this.props
    if(match.params.city == undefined){
      history.push('/phl')
    }

    const self = this;
      axios.get(`api/${match.params.city}/categories`)
    .then(function (response) {
      self.setState({
        categoriesData: response.data
      }, () => {
        console.log(self.state);
      })

    })
    .catch(function (error) {
      console.log(error);
    });

  }



  loopCategories = () => {

    if(this.state.categoriesData != ''){
      return this.state.categoriesData.map((category, i) => {
        const loopListings = () => {
           return category.listings.map((listing, index) => {
            return(
              <a href={`${category.title}/${listing.slug}`} className="link" key={index}>
                {listing.name}
              </a>
            )
          })
        }
        return (
        <div key={i} className="categories">

        <div className="title">{category.title}</div>
        <div className="group-links">
        {loopListings()}

        </div>
        </div>

        )
      })
    }

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
        <h1>C<i className="far fa-smile"></i>nnecting Pe<i className="far fa-smile"></i>ple   </h1>
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
