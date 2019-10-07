import React, { Component } from "react";
import "../styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <section id="hero">
        <div class="hero-heading">
          <h1>We like to create awesome designs.</h1>
          <p>
            Sunlimetech is an advanced and proactive at the app development and
            providing you all the ultimate software development services that
            you need. Sunlimetech ensure to offer you all the required &
            ultimate services meeting the advanced deadlines and requirements of
            the field. We believe in providing the ultimate services with
            quality and meeting all the deadlines, application development
            industry is at its peak and hitting the new dimensions rapidly.
          </p>
        </div>
        <div class="row mgmt-links-wrapper">
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/design-and-fix-your-bootstrap-4-issues"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-heart"></i>
                <p>Visual Design</p>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/fix-your-bootstrap-html-and-css3-issues"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-wrench"></i>
                <p>Development</p>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/do-web-development-in-pure-php-and-frameworks"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-users"></i>
                <p>Management</p>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/provide-responsive-design-for-globally-existing-devices"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-share-alt"></i>
                <p>Marketing</p>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/convert-bootstrap-or-html-to-wordpress-for-global-devices"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-cart-plus"></i>
                <p>eCommerce</p>
              </div>
            </a>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-2">
            <a
              href="https://www.fiverr.com/sunlimetech/optimize-your-website-speed-and-performance-via-speedinsight"
              target="_blank"
            >
              <div class="link-box">
                <i class="fa fa-eye"></i>
                <p>Branding</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
