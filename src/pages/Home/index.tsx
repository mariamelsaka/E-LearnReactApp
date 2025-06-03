import "./index.css";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import SectionOne from "../../components/Home/SectionOne";
import SectionTwo from "../../components/Home/SectionTwo";
import SectionThree from "../../components/Home/SectionThree";
import SectionFour from "../../components/Home/SectionFour";
import SectionSix from "../../components/Home/SectionSix";
import { memo, useEffect } from "react";
import Animate from "../../components/Animate";


const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Animate>
        {/* <!-- start section one --> */}
        <SectionOne />
        {/* <!-- end section one --> */}
      </Animate>

      <Animate>
        {/* <!-- start section two  services --> */}
        <div id="services">
          <h6>Our Services</h6>
          <h2>Fostering a playful & engaging learning environment</h2>
          <div className="row">
            <SectionTwo />
          </div>
        </div>
        {/* <!-- end section two services --> */}
      </Animate>

      
        {/* <!-- start sec 3 courses price --> */}
        <div id="courses">
          <div className="brief">
            <h6>Explore Programs</h6>
            <h2>Our Most Popular Classes</h2>
          </div>
           <Animate>
          <div className="row">
           <SectionThree />
            
          </div>
          </Animate>
        </div>
        {/* <!-- end sec 3 courses price --> */}
      

      <Animate>
        {/* <!-- start sec4 --> */}
        <div className="instructors">
          <p className="sec4-title">Tutors</p>
          <h3 className="sec4-hero-title">Meet the Heroes</h3>
          <p className="sec4-desc">
            On Weekend UX, instructors from all over the world instruct millions
            of students. We offer the knowledge and abilities.
          </p>
          {/* <div className="row"> */}
          <div className="row d-flex flex-wrap justify-content-center instructors">
            <SectionFour />
          </div>
        </div>
        {/* <!-- end sec4  --> */}

      </Animate>

      <Animate>
        {/* <!-- start sec5 --> */}
        <div className="uni">
          <Image src={IMAGES.lOGOIMAGE2} id="uniImg" alt="Student from National University - Jacob Jones" />
          <h2 id="UniTitle">
            Courses was fantastic! It is Master platform for those looking to
            start a new career, or need a refresher.
          </h2>
          <Image src={IMAGES.avatar4HOME} id="uniImg2" alt="Student from National University - Jacob Jones" />
          <p id="uniP">Jacob Jones</p>
          <p id="uniP1">Student, National University</p>
        </div>

        {/* <!-- end sec5  --> */}
      </Animate>

      <Animate>
        {/* <!-- start sec6 --> */}
        <div className="blogs">
          <h5 id="section-title">Our recent blogs</h5>
          <SectionSix />
        </div>
        {/* <!-- end sec6  --> */}
      </Animate>

    </>

  );
};



export default memo(Home);
