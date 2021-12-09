import React from "react";
import "./ServiceCarousel.css";
import img1 from "./client demands/VIVO X_prev_ui.png";
import img2 from "./client demands/OPPO _prev_ui.png";
import img3 from "./client demands/ONE PLUS_prev_ui.png";
import img4 from "./client demands/MI_prev_ui.png";
import img5 from "./client demands/IPHONE 13 PRO_prev_ui.png";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//Owl Carousel Settings
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

export default function ServiceCarousel() {
  return (
    <div className="service-carousel">
      <div className="sc-title">
        <h1>Our Awesome Service</h1>
        <p>
          At Techtix workshop, we charge you for our services only if you choose
          us for the actual repairing services. There are no minimum charges
          associated with diagnosis or inspection. We also offer completely free
          pickup and drop services at Techtix
        </p>
      </div>

      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        <div className="item">
          <img src={img1} />
        </div>
        <div className="item">
          <img src={img2} />
        </div>
        <div className="item">
          <img src={img3} />
        </div>
        <div className="item">
          <img src={img4} />
        </div>
        <div className="item">
          <img src={img5} />
        </div>
        <div className="item">
          <img src={img1} />
        </div>
        <div className="item">
          <img src={img2} />
        </div>
        <div className="item">
          <img src={img3} />
        </div>
        <div className="item">
          <img src={img4} />
        </div>
        <div className="item">
          <img src={img5} />
        </div>
      </OwlCarousel>
    </div>
  );
}
