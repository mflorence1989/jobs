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
          <section className="submenu">
            <div className="direction">
              <div className="prev">Prev</div>
              <div className="next">NEXT</div>
            </div>
            <nav className="sub-links">
              <a href="#">More ads by user</a>
              <a href="#">Print</a>
              <a href="#">Share</a>
              <a href="#">contact seller</a>
            </nav>
          </section>
          <section>
            <div className="media-column">
              <div className="gallery">
                <div className="slider">
                  <div className="main-image">
                    <div className="left-arrow">
                      <i className="fas fa-angle-left" />
                    </div>
                    <div className="right-arrow">
                      <i className="fas fa-angle-right" />
                    </div>
                  </div>
                </div>
                <div className="thumbnails">
                  <div className="thumb-img">image</div>
                </div>
              </div>
            </div>
            <div className="details-column">
              <div className="date">4/19/1989</div>
              <h3>porshe</h3>
              <h4 className="price">1344</h4>
              <div className="more-details">
                <div className="info">
                  <label>Vin</label>
                  <h5>used </h5>
                </div>
                <div className="info">
                  <label>Mileage</label>
                  <h5>used </h5>
                </div>
                <div className="info">
                  <label>Vin</label>
                  <h5>used </h5>
                </div>
              </div>
              <div className="description">
                <p>this is where the description goes </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
