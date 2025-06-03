import { fakerEN } from "@faker-js/faker";
import {MakeArrayForSeed} from "../../utils/functions"
interface Idata{
  title:string,
  department:string,
  fullName:string,
  number:number,
  price:number,
  Image:string
}
// const Courses = ({title,department}:Idata) => {
const Courses = () => {
 
  // const CourseTitles = MakeArrayForSeed(fakerEN.book.title(),15)// if u pass title() like this u pass the result not the function
  const CourseTitles = MakeArrayForSeed(fakerEN.book.title,15)//so pass it like this title to pass the function not the result
  const CourseDepartment = MakeArrayForSeed(fakerEN.commerce.department,15)
  const CoursefullName = MakeArrayForSeed(fakerEN.person.fullName,15)
    // const CoursePrice = MakeArrayForSeed(fakerEN.commerce.price,15)
    const CoursePrice = MakeArrayForSeed(() => fakerEN.commerce.price({ min: 500, max: 2000 }),15);
  // const CourseNumber = MakeArrayForSeed(fakerEN.number.int,15)
  const CourseNumber = MakeArrayForSeed(() => fakerEN.number.int({ min: 100, max: 2000 }),15);
  const CourseImage = MakeArrayForSeed(() => fakerEN.image.urlLoremFlickr({ category: 'education'}),15);
  // const CourseImage = MakeArrayForSeed(fakerEN.image.avatar,15)

  // const obj={title:CourseTitles,department:CourseDepartment,name:CoursefullName,number:CourseNumber,image:CourseImage}
  // console.log(obj)
  // const test=CourseTitles.concat(CourseDepartment).concat(CoursefullName).concat(CourseNumber).concat(CourseImage)
  // console.log(test)
  let obj2:Idata;
  const res:Idata[]=[];
  for(let i=0;i<15;i++){
     obj2={
      title:String(CourseTitles[i]),
      department:String(CourseDepartment[i]),
      number:Number(CourseNumber[i]),
      price:Number(CoursePrice[i]),
      fullName:String(CoursefullName[i]),
      Image:String(CourseImage[i])
    }
    res.push(obj2)
  }
console.log(res)


    return <>
    <div className="container !ml-[6em]">
    <div className="row">
    
    {
      res.map((item,idx)=>(
        <div className="col-lg-4" key={idx}>
        <div className="card mb-[2em]" style={{width:"18rem"}}>
        <img src={item.Image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.department}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      ))
   
    }
  
  </div>
  </div>
    {/* {
      CourseTitles.map((title,idx)=>{
        return <h5 className="card-title" key={idx}>{title}</h5>
        
      })
      }
    
      
      {
        CourseDepartment.map((title,idx)=>{
          return <p key={idx}>{title}</p>
        })
      }
      {
        CoursefullName.map((title,idx)=>{
          return <p key={idx}>{title}</p>
        })
      }
      {
        CourseNumber.map((title,idx)=>{
          return <p key={idx}>{title}</p>
        })    
      }
      {
        CourseImage.map((title,idx)=>{
          return <p key={idx}>{title}</p>
        })    
      } */}
    </>
  
};

export default Courses;
