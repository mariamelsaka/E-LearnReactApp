import Image from "../../components/Ui/Image";
import {Section2List} from "../../data"
const SectionTwo = () => {
  return (
    <>
    {
        Section2List.map((sec,index)=>{
            return (<div key={index} className="col-md-4 col-lg-4 col-sm-12 card-wrapper">
            <div className="card CARD">
              <div className="headCard">
                <Image
                  src={sec.imageURL}
                  width="48px"
                  alt="error"
                />
                <h4>
                  <pre>{sec.title}</pre>
                </h4>
              </div>
              <p>{sec.description}</p>
            </div>
          </div>
          );
        })}
      
    </>
  )
}

export default SectionTwo