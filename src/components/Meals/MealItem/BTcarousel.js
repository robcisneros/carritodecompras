
import React from "react";
import { Carousel } from "react-bootstrap";

import meal1 from "../../../assets/meal1.jpg";
import meal2 from "../../../assets/meal2.jpg";
import meal3 from "../../../assets/meal3.jpg";

const BTcarosuel = () => {
  return (
    <div>
      <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={meal1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={meal2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={meal3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
    </div>
  );
};
export default BTcarosuel;

