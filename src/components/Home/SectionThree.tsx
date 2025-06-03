import Image from "../../components/Ui/Image";
import { Section3List } from "../../data";

const SectionThree = () => {
  return (
    <>
      {Section3List.map((sec, index) => {
        return (<div className="col-md-4 col-lg-4 col-sm-12" key={index}>
          <div className="card" style={{ width: "18rem" }}>
            <Image
              src={sec.imageURL}
              className="card-img-top"
              alt="error"
            />
            {/* <div className="card-body"> */}
            {/* gbt */}
            <div className="card-body d-flex flex-column justify-content-between">
              <p className="deTitle">Design</p>
              <h5 className="card-title">{sec.title}</h5>
              <p className="card-text">{sec.description}</p>
              <div className="price">
                <Image src={sec.ImageLogo} width="140px" alt="error in the profile image"/>
                <h4>{sec.price}</h4>
              </div>
            </div>
          </div>
        </div>);
      })}
    </>
  );
};

export default SectionThree;
