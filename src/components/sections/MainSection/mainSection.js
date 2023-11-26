import React, { useState, useRef } from "react";
import Slider from "react-slick";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  SliderContainer,
  SlideContainer,
  SlideContent,
  SliderNav,
  NavButton,
  CenteredImageContainer,
  SlideImage,
} from "./mainSection.styled";
import { MainButton } from "components/buttons/button";

const MainSectionSlider = ({ sliders }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (index) => {
      setCurrentSlide(index);
      // Тут ви можете додати логіку для зміни класів SlideContent
    },
  };

  const goToSlide = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <SliderContainer>
      <Slider ref={sliderRef} {...settings}>
        {sliders.map((slider, index) => (
          <SlideContainer key={slider.id}>
            <CenteredImageContainer>
              <SlideImage src={slider.image} alt={`Slide ${slider.id}`} />
            </CenteredImageContainer>
            <SlideContent active={currentSlide === index}>
              <h3>{slider.text}</h3>
              <MainButton title={slider.buttonText}/>
            </SlideContent>
          </SlideContainer>
        ))}
      </Slider>
      <SliderNav>
        <NavButton className="prev" onClick={() => goToSlide(currentSlide - 1)}>
          <NavigateBeforeIcon fontSize="large"/>
        </NavButton>
        <NavButton className="next" onClick={() => goToSlide(currentSlide + 1)}>
          <NavigateNextIcon fontSize="large"/>
        </NavButton>
      </SliderNav>
    </SliderContainer>
  );
};

export default MainSectionSlider;
