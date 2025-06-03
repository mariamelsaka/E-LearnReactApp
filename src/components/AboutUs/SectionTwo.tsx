import Button from "../../components/Ui/Button";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";

const SectionTwo = () => {
  return (
    <div className="row col-md-12" id="sec2">
      <div className="col-lg-6 col-md-6 col-lg-6" id="sec2col1">
        <div id="graysec2" className="rounded">
        <Image
          id="img3-AboutUs"
          src={IMAGES.sectionImgAboutUs}
          alt="error"
        />
        </div>
        
      </div>
      <div className="col-lg-6 col-md-6 col-lg-6" id="sec2col2">
        <h4>Features</h4>
        <h2>
          We are always working <br />
          to provide you best of <br />
          the features in all <br />
          aspects.
        </h2>
        <p>
          At WEEKENDUX the chief determination is to clear the minds of our
          students about their goals...
        </p>
        <br />
        <p>
          You will find every little thing on the internet in just a click of
          hand, but here we admire that without knowledge and practice the
          internet may even fail you...
        </p>
        <Button type="submit" className="btn-lg rounded-pill">
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default SectionTwo;
