import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div class="footer-container">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a class="navbar-brand-custom" href="#">
              Tuber <i class="fas fa-seedling"></i>
            </a>
            <div class="social-media">
              <img class="app-stores" src="/images/get-it-on-app-store.svg" />
              <img class="app-stores" src="/images/get-it-on-google-play.png" />
            </div>
          </div>
          <div class="col mb-3"></div>
          <div class="col mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Help</li>
              <li class="nav-item mb-2">Learn to garden forums</li>
              <li class="nav-item mb-2">Add your garden</li>
              <li class="nav-item mb-2">FAQs</li>
              <li class="nav-item mb-2">About Tuber</li>
            </ul>
          </div>
          <div class="col mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Promotions</li>
              <li class="nav-item mb-2">Features</li>
              <li class="nav-item mb-2">Pricing</li>
              <li class="nav-item mb-2">Lorem</li>
              <li class="nav-item mb-2">Ipsum</li>
            </ul>
          </div>
          <div class="col mb-3">
            <ul class="nav flex-column">
              <li class="nav-item mb-2">Lorem</li>
              <li class="nav-item mb-2">Ipsum</li>
              <li class="nav-item mb-2">Dolor</li>
              <li class="nav-item mb-2">Sit</li>
              <li class="nav-item mb-2">Amet</li>
            </ul>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
