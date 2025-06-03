import "./index.css";
import SectionThree from "../../components/AboutUs/SectionThree";
import SectionOne from "../../components/AboutUs/SectionOne";
import SectionTwo from "../../components/AboutUs/SectionTwo";
import BenefitsHeader from "../../components/AboutUs/BenefitsHeader";
import { useEffect } from "react";
import Animate from "../../components/Animate";
const AboutUs = () => {
  useEffect(() => {
    document.title = "about us";
  }, [])
  return (
    <>

      {/*start section 1 */}
      <div className="row" id="parent">
        <Animate>
          <SectionOne />
        </Animate>

        {/*end section 1 */}
        {/* start section 2 */}
        <Animate>
          <SectionTwo />
        </Animate>

        {/*end section 2 */}

        {/*start section 3 */}

        <div className="row" id="sec3">
          <Animate>
            <BenefitsHeader />
            <SectionThree />
          </Animate>
        </div>
      </div>

      {/*end section 3 */}
     
    </>
  );
};

export default AboutUs;
