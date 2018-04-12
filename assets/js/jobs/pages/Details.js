import React, { Component } from "react";
import ReactDOM from "react-dom";
import Gallery from "./components/Gallery.js";

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
                <a href="#" className="prev">
                  Prev
                </a>
                <a href="#" className="next">
                  NEXT
                </a>
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
                <Gallery />
              </div>
              <div className="details-column">
                <div className="date">Posted on: 4/19/1989</div>
                <h3 className="title">Blue Grand Marquis</h3>
                <h4 className="price">$5,944</h4>
                <div className="more-details">
                  <div className="info">
                    <label>Vin </label>
                    <h5>A23st236D </h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>60,000 </h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual </h5>
                  </div>
                </div>
                <div className="more-details">
                  <div className="info">
                    <label>Vin </label>
                    <h5>A23st236D </h5>
                  </div>
                  <div className="info">
                    <label>Mileage</label>
                    <h5>6,000 </h5>
                  </div>
                  <div className="info">
                    <label>Transmission</label>
                    <h5>Manual </h5>
                  </div>
                </div>
                <div className="description">
                  <label>Description</label>
                  <p>
                    DIY kale chips try-hard, pickled 8-bit fixie echo park
                    butcher. You probably haven't heard of them PBR&B occupy
                    cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch
                    activated charcoal typewriter whatever franzen slow-carb
                    organic. 8-bit ramps selfies keffiyeh meditation mlkshk,
                    scenester woke YOLO. IPhone wolf master cleanse +1 coloring
                    book, enamel pin waistcoat. Echo park seitan bushwick
                    bespoke hammock pug subway tile messenger bag chillwave
                    unicorn meh.{" "}
                  </p>
                  <p>
                    DIY kale chips try-hard, pickled 8-bit fixie echo park
                    butcher. You probably haven't heard of them PBR&B occupy
                    cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch
                    activated charcoal typewriter whatever franzen slow-carb
                    organic. 8-bit ramps selfies keffiyeh meditation mlkshk,
                    scenester woke YOLO. IPhone wolf master cleanse +1 coloring
                    book, enamel pin waistcoat. Echo park seitan bushwick
                    bespoke hammock pug subway tile messenger bag chillwave
                    unicorn meh.{" "}
                  </p>
                  <p>
                    DIY kale chips try-hard, pickled 8-bit fixie echo park
                    butcher. You probably haven't heard of them PBR&B occupy
                    cardigan. Aesthetic brooklyn plaid marfa poke, shoreditch
                    activated charcoal typewriter whatever franzen slow-carb
                    organic. 8-bit ramps selfies keffiyeh meditation mlkshk,
                    scenester woke YOLO. IPhone wolf master cleanse +1 coloring
                    book, enamel pin waistcoat. Echo park seitan bushwick
                    bespoke hammock pug subway tile messenger bag chillwave
                    unicorn meh.{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
