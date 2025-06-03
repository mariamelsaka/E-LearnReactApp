import Image from "../../components/Ui/Image";
import { Section6List } from "../../data";

const SectionSix = () => {
    // filter small and large , these find in the data 
  const smallBlogs = Section6List.filter((b) => b.variant === "small");
  const largeBlog = Section6List.find((b) => b.variant === "large");

  return (
    <div className="row" id="blog">
      {/* Left side - small blogs */}
      <div className="col-lg-6 col-md-6 col-md-12 mb-4">
        {smallBlogs.map((sec, index) => (
          <div className="row mb-4" key={index}>
            {/* <div className="col-lg-6 col-md-6"> */}
            <div className="col-12 col-sm-5">
              <Image src={sec.imageUrl} className="ImgBlog" alt="blog image" />
            </div>
            {/* <div className="col-lg-6 col-md-6 rightTxt"> */}
            <div className="col-12 col-sm-7  rightTxt">
              <p id="Date1">{sec.Date}</p>
              <p className="titleBlog1">{sec.title}</p>
              <p className="descBlog1">{sec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right side - large blog */}
      {largeBlog && (
        <div className="col-lg-6 col-md-6">
          <div className="row">
            <Image src={largeBlog.imageUrl} alt="large blog image" />
          </div>
          <div className="row rightTxt">
            <p id="Date3">{largeBlog.Date}</p>
            <h4 className="titleBlog3">{largeBlog.title}</h4>
            <p className="descBlog3">{largeBlog.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionSix;

