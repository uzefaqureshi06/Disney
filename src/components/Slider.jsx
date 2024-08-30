import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="" />
        </a>
      </Wrap>
    </Carousel>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ left: "10px" }} onClick={onClick}>
      ←
    </Arrow>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Arrow className={className} style={{ right: "10px" }} onClick={onClick}>
      →
    </Arrow>
  );
};

const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: visible; /* Ensure overflow is visible */
  }



  & > button {
    opacity: 1;
    height: 100%;
    width: auto;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-prev,
  .slick-next {
    top: 50%;
    transform: translateY(-50%);
  }

  .slick-prev {
    left: 30px;
  }

  .slick-next {
    right: 30px;
  }
`;

const Wrap = styled.div`
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  padding: 0 20px; /* Add padding to create space around slides */

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const Arrow = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px;
  font-size: 12px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export default ImgSlider;
