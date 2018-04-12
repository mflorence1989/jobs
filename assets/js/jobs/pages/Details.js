import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div className="details-page">
        <div className="container">
          <div className="white-box">
          <section className="sub-menu">
            <div className="direction">
              <a href="#" className="prev">Prev</a>
              <a href="#" className="next">NEXT</a>
            </div>
            <nav className="sub-links">
              <a href="#">More ads by user</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">contact seller</a>
            </nav>
          </section>
          <section className="content-area">
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image" >
                    <div className="arrows left-arrow">
                      <i className="fas fa-angle-left" />
                    </div>
                    <div className="arrows right-arrow">
                      <i className="fas fa-angle-right" />
                    </div>
                    <div className="image-1" style={{
                      "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                    }} >
                    </div>
                  </div>
                </div>
                <div className="thumbnails" >
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                <div className="thumb-img" style={{
                  "backgroundImage": "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg/1200px-Porsche_Panamera_4_E-Hybrid_%28MSP17%29.jpg')"
                }} >
                </div>
                </div>
              </div>
            </div>
            <div className="details-column" >
            <div className="date" >
          Posted on:  4/19/1989
            </div>
            <h3 className="title">White Porshe</h3>
            <h4 className="price">$135,944</h4>
            <div className="more-details" >
            <div className="info" >
            <label>Vin </label>
            <h5>A23st236D </h5>
            </div>
            <div className="info" >
            <label>Mileage</label>
            <h5>6,000 </h5>
            </div>
            <div className="info" >
            <label>Transmission</label>
            <h5>Manual </h5>
            </div>
            </div>
            <div className="more-details" >
            <div className="info" >
            <label>Vin </label>
            <h5>A23st236D </h5>
            </div>
            <div className="info" >
            <label>Mileage</label>
            <h5>6,000 </h5>
            </div>
            <div className="info" >
            <label>Transmission</label>
            <h5>Manual </h5>
            </div>
            </div>
            <div className="description" >
            <label>Description</label>
            <p>DIY kale chips try-hard, pickled 8-bit fixie echo park butcher. You probably haven't heard of them PBR&B occupy cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch activated charcoal typewriter whatever franzen slow-carb organic. 8-bit ramps selfies keffiyeh meditation mlkshk, scenester woke YOLO. IPhone wolf master cleanse +1 coloring book, enamel pin waistcoat. Echo park seitan bushwick bespoke hammock pug subway tile messenger bag chillwave unicorn meh. </p>
            <p>DIY kale chips try-hard, pickled 8-bit fixie echo park butcher. You probably haven't heard of them PBR&B occupy cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch activated charcoal typewriter whatever franzen slow-carb organic. 8-bit ramps selfies keffiyeh meditation mlkshk, scenester woke YOLO. IPhone wolf master cleanse +1 coloring book, enamel pin waistcoat. Echo park seitan bushwick bespoke hammock pug subway tile messenger bag chillwave unicorn meh. </p>
            <p>DIY kale chips try-hard, pickled 8-bit fixie echo park butcher. You probably haven't heard of them PBR&B occupy cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch activated charcoal typewriter whatever franzen slow-carb organic. 8-bit ramps selfies keffiyeh meditation mlkshk, scenester woke YOLO. IPhone wolf master cleanse +1 coloring book, enamel pin waistcoat. Echo park seitan bushwick bespoke hammock pug subway tile messenger bag chillwave unicorn meh. </p>

            </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    );
  }
}
