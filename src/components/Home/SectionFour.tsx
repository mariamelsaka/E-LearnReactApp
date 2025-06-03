import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { Section4List } from "../../data";
const SectionFour = () => {
  return (
    <>
      {Section4List.map((sec, index) => {
        return (
          <div className="col-md-3 col-lg-3 col-sm-12 card-wrapper1" key={index}>
            <div className="card">
              <Image src={sec.imageProfile} id="avatar" width="80px" alt="error" />
              <p className="name">{sec.name}</p>
              <p className="positionJob">{sec.position}</p>
              <p className="description">{sec.description}</p>
              <div className="accountLinks">
                <Image src={IMAGES.footerTwitter} alt="error" />
                <Image src={IMAGES.footerLinkedIn} alt="error" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SectionFour;
