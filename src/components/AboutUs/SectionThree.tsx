import { Section3AboutUsList } from "../../data";

const SectionThree = () => {
  return (
    <>
     <div className="row" id="row1Sec3" >
      {Section3AboutUsList.map((sec,index) => {
        return (   
            <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
              <div className="card" id={sec.circleId}>
                <div className="circle"></div>
                <h2>{sec.number}</h2>
                <h4>{sec.title}</h4>
                <p>{sec.description}</p>
              </div>
            </div>   
        );
      })}
      </div>
    </>
  );
};

export default SectionThree;
