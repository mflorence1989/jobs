import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      allImages: '',
      currentImage: '',
      currentIndex: 0
    }
  }
  componentWillMount(){
    const allImages = [
      'https://images.craigslist.org/00K0K_5knyLoF28cg_600x450.jpg',
      'https://images.craigslist.org/00303_cthnAapfhf6_600x450.jpg',
      'https://images.craigslist.org/00202_3BdNviwuqUY_600x450.jpg',
      'https://images.craigslist.org/00o0o_9nhLBPxlBRr_600x450.jpg',
      'https://images.craigslist.org/00I0I_exNXQsQiGDR_600x450.jpg',
      'https://images.craigslist.org/00A0A_2bmxJJ6sTiT_600x450.jpg'
    ]
    this.setState({
      allImages ,
      currentImage: allImages[this.state.currentIndex]

    })

  }
allImgsLoop = () =>{

  return this.state.allImages.map((item, i)=>{
    console.log(this.state.allImages);
    return(
      <div key={i} className="thumb-img" style={{
        "backgroundImage": `url('${item}')`
      }} >
      </div>
    )
  })
}

nextBtn = () => {
  this.setState({
    currentIndex: this.state.currentIndex + 1
  })

}
prevBtn = () => {
  this.setState({
    currentIndex: this.state.currentIndex - 1
  })

}
  render() {
    const { match, location, history } = this.props;
    return (

              <div className="gallery">
                <div className="slider">
                  <div className="main-image" >
                    <div className="arrows left-arrow" onClick={this.prevBtn}>
                      <i className="fas fa-angle-left" />
                    </div>
                    <div className="arrows right-arrow" onClick={this.nextBtn}>
                      <i className="fas fa-angle-right" />
                    </div>
                    <div className="image-1" style={{
                      "backgroundImage":
                      `url('${this.state.allImages[this.state.currentIndex]}')`
                    }} >
                    </div>
                  </div>
                </div>
                <div className="thumbnails" >
                {this.allImgsLoop()}

                </div>
              </div>

    );
  }
}
