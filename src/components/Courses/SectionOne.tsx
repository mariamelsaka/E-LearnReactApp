import { IMAGES } from "../../config/assets"
import Image from "../Ui/Image"
import "./index.css"
import "./index.css"
import { memo } from "react"
import MemoNavItem from "../MemoNavItem"
const SectionOne = () => {
  return (
    <>
<div className="relative">
  <Image 
    id="imgDown"
    alt="course-Error" 
    className="!w-full h-[100%] absolute z-0" 
    src={IMAGES.down}
  />
  
  <div className="lg:grid lg:grid-cols-2 !lg:mb-[11em] lg:h-[30em] lg:relative lg:z-10">
    <div>
      <div className="flex flex-row h-[100%]">
        <Image 
          id="imgLeft"
          alt="course-Error" 
          className="!lg:w-full h-[100%] relative" 
          src={IMAGES.left}
        />       
      </div>    
    </div>
    
    <div className="relative flex flex-col justify-center px-8">
      <div className="flex flex-row h-[100%] absolute items-center">
        <Image 
          id="imgGirl"
          alt="course-Error" 
          className="!w-fit h-[50%] relative z-10 top-30 left-38" 
          src={IMAGES.setGirl}
        />
        <Image 
          id="imgRight"
          alt="course-Error" 
          className="!w-fit h-[100%] relative z-1" 
          src={IMAGES.right}
        />
      </div>   
      <div id="text-sec1"className="absolute lg:bottom-80 lg:right-30  text-center z-20">
        <h3 className="!text-teal-800 font-semibold lg:whitespace-nowrap">
          Explore What Professionals Like You Are Learning The Most
        </h3>
        <MemoNavItem children=" Visit Courses" to="/courses#coursesAll" wrapInLi={false} useAlternateStyle={false}/>
      </div>
    </div>
  </div>
</div>


    
    
    
    
      
     


    </>
  )
}

export default memo(SectionOne)

// import { IMAGES } from "../../config/assets"
// import Button from "../Ui/Button"
// import Image from "../Ui/Image"
// import "./index.css"
// const SectionOne = () => {
//   return (
//     <>
//       <div className="relative">
//         <Image 
//           alt="course-Error" 
//           className="!w-full h-[100%] absolute z-0 sm:d-none" 
//           src={IMAGES.down}
//         />
//         <div className="grid grid-cols-1 md:grid-cols-2 !mb-[11em] h-[20em] md:h-[30em] relative z-10">
//           <div>
//             <div className="flex flex-row h-full">
//               <Image 
//                 alt="course-Error" 
//                 className="!w-full h-full relative" 
//                 src={IMAGES.left}
//               />
//             </div>    
//           </div>
//           <div className="relative flex flex-col justify-center px-4 md:px-8">
//             <div className="flex flex-row h-full absolute items-center">
//               <Image 
//                 alt="course-Error" 
//                 className="!w-fit h-[40%] md:h-[50%] relative z-10 top-10 md:top-30 left-8 md:left-38" 
//                 src={IMAGES.setGirl}
//               />
//               <Image 
//                 alt="course-Error" 
//                 className="!w-fit h-full relative z-1" 
//                 src={IMAGES.right}
//               />
//             </div>   
//             <div className="absolute bottom-20 md:bottom-80 right-10 md:right-30 text-center z-20">
//               <h3 className="!text-teal-800 font-semibold whitespace-nowrap text-sm md:text-lg">
//                 Explore What Professionals Like You Are Learning The Most
//               </h3>
//               <Button className="!text-xs md:!text-base">
//                 Visit Courses
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default SectionOne;
