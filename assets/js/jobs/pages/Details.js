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
            4/19/1989
            </div>
            <h3>porshe</h3>
            <h4 className="price">1344</h4>
            <div className="more-details" >
            <div className="info" >
            <label>Vin</label>
            <h5>used </h5>
            </div>
            <div className="info" >
            <label>Mileage</label>
            <h5>used </h5>
            </div>
            <div className="info" >
            <label>Vin</label>
            <h5>used </h5>
            </div>
            </div>
            <div className="description" >
            <p>this is where the description goes </p>
            </div>
            </div>
          </section>
        </div>
      </div>
      </div>
    );
  }
}
