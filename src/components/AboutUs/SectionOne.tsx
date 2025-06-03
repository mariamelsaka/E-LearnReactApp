import Button from "../../components/Ui/Button";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";

const SectionOne = () => {
  return (
    <div className="row" id="sec1">
      <div className="col-lg-6 col-md-6 col-lg-6" id="sec1col1">
        <h1 id="secTitle">About Us</h1>
        <h2>
          WEEKEND UX providing the best opportunities to the students around
          the globe.
        </h2>
        <p>
          Weekend UX, is a UI/UX Design Academy in Delhi involved in User
          Experience and User Interface Training and Consulting. It was started
          in 2023 and passionate towards User Interface Design/ User Experience
          Design, Human Computer Interaction Design...
        </p>
        <Button type="submit" className="btn-lg rounded-pill">
          Join Us
        </Button>
      </div>
      <div className="col-lg-6" id="col2sec1">
        <div id="gray" className="rounded"></div>
        <Image
          id="img1-AboutUs"
          src={IMAGES.rectangle13AboutUs}
          alt="error"
        />
        <Image
          id="img2-AboutUs"
          src={IMAGES.rectangle14AboutUs}
          alt="error"
        />
      </div>
    </div>
  );
};

export default SectionOne;
