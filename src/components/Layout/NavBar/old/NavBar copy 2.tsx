import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../../Ui/Image";
import { IMAGES } from "../../../config/assets";
import "./index.css"
import { FiMenu, FiX } from 'react-icons/fi'; // FiMenu = open, FiX = close
import Button from "../../Ui/Button";

const NavBar = () => {

  const location1 = useLocation();
  const currentPath = location1.pathname;
  const [isCollapsed, setIsCollapsed] = useState(true);
  // ---------------------
  const { pathname } = useLocation();//this hook used to have acess to the path
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // logoutttttttttttttttttttttttttttttttttttttttttttttttt
  const onLogout = () => {
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);//location is web api
    }, 1500);
  };
//-----------------------------
  useEffect(() => {
    setIsCollapsed(true);
  }, [location1.pathname]);
  const backdropClass = isCollapsed ? "" : "backdrop-blur-md h-[25em]";  // Change blur intensity as needed
  // if (userData === "/login" || userData === "/register") {
  //   return (
  //     <nav className={`w-full bg-gradient-to-b from-[#5fdfb7a7] to-white sm:h-[10em] h-[12em]`}>
  //       <div className={`container mx-auto px-4`}>
  //       <button
  //          className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
  //           aria-expanded={!isCollapsed}
  //           aria-label="Toggle navigation"
  //           onClick={() => setIsCollapsed(!isCollapsed)}
  //         >
  //           {isCollapsed ? <FiMenu className="text-5xl p-2 text-[#20B486] " /> : <FiX />}
  //         </button>
  //         <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-4`}>

  //           {currentPath === "/register" && (


  //             <NavLink
              
  //               className="custome-log bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white relative top-[2em] !no-underline font-medium px-4 py-2 rounded"
  //               to="/login"
  //             >
  //               sign in
  //             </NavLink>
  //             //   <Button className="custome-log bg-[#20B486] hover:bg-[#199e74] transition duration-300">
  //             //   <NavLink
  //             //     className="text-white !no-underline font-medium"
  //             //     to="/login"
  //             //   >
  //             //     sign in
  //             //   </NavLink>
  //             // </Button>

  //           )}
  //           {currentPath === "/login" && (
  //             //   <Button className="custome-reg bg-[#20B486] hover:bg-[#199e74] transition duration-300">
  //             //   <NavLink
  //             //     className="text-white !no-underline font-medium"
  //             //     to="/register"
  //             //   >
  //             //     create free account
  //             //   </NavLink>
  //             // </Button>

  //             <NavLink
  //               className="custome-reg bg-[#20B486]  relative top-[2em] hover:bg-[#199e74] transition duration-300 text-white !no-underline font-medium px-4 py-2 rounded"
  //               to="/register"
  //             >
  //               create free account
  //             </NavLink>


  //           )}

  //         </div>
  //       </div>
  //     </nav>
  //   );
  // } else {
  //   if (currentPath === "/contactUs")
  //   {
  //     return   <nav className={`w-full ${backdropClass}  bg-gradient-to-b from-[#5fdfb7a7] to-white h-[12em]`}>
  //       <div className={`container flex mx-4 py-2`}>
  //         <NavLink to="/">
  //           <Image
  //             src={IMAGES.lOGOIMAGE2}
  //             className="hidden lg:block mt-[1em]"
  //             id="logo"
  //             width="31%"
  //             alt="logo image is not loaded"
  //           />
  //         </NavLink>

  //         <button
  //          className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
  //           aria-expanded={!isCollapsed}
  //           aria-label="Toggle navigation"
  //           onClick={() => setIsCollapsed(!isCollapsed)}
  //         >
  //           {isCollapsed ? <FiMenu className="text-5xl p-2 text-[#20B486]" /> : <FiX />}
  //         </button>


  //         <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
  //           <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6">  {/* Adjusted gap here */}
  //             <li>
  //               <NavLink className="text-black !no-underline  hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
  //                 Home
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/aboutUs">
  //                 About us
  //               </NavLink>
  //             </li>
  //             <li>
  //               <a href="#" className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300">
  //                 Courses
  //               </a>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/contactUs">
  //                 Contact us
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
  //                 FAQ's
  //               </NavLink>
  //             </li>
  //             <li className="md:ml-auto  lg:ml-[400px]">
  //               <NavLink className="text-black whitespace-nowrap  !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300" to="/login">
  //                 sign in
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink
  //                 className="custome-reg whitespace-nowrap  bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white !no-underline font-medium px-4 py-2 rounded"
  //                 to="/register"
  //               >
  //                 create free account
  //               </NavLink>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   }
  //   return (
  //     <nav className={`${backdropClass} bg-gradient-to-b from-[#5fdfb7a7] to-white w-full h-[12em]`}>
  //       <div className={`container flex`}>
  //         <button
  //          className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
  //           aria-expanded={!isCollapsed}
  //           aria-label="Toggle navigation"
  //           onClick={() => setIsCollapsed(!isCollapsed)}
  //         >
  //           {isCollapsed ? <FiMenu className="text-5xl p-2 text-[#20B486]" /> : <FiX />}
  //         </button>
  //         <NavLink to="/">
  //           <Image
  //             src={IMAGES.lOGOIMAGE2}
  //             className="hidden lg:block mt-[1.5em] "
  //             alt="logo image is not loaded"
              
  //           />
  //         </NavLink>

  //         <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
  //           <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6">  {/* Adjusted gap here */}
              
  //             <li>
  //               <NavLink className="text-black !no-underline  hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
  //                 Home
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/aboutUs">
  //                 About us
  //               </NavLink>
  //             </li>
  //             <li>
  //               <a href="#" className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300">
  //                 Courses
  //               </a>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/contactUs">
  //                 Contact us
  //               </NavLink>
  //             </li>
  //             <li>
  //               <NavLink className="text-black !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
  //                 FAQ's
  //               </NavLink>
  //             </li>
             
  //             <li>
  //               <Button
  //                 className="lg:ml-[35em] custome-reg whitespace-nowrap  bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white !no-underline font-medium px-4 py-2 rounded"    
  //                 onClick={onLogout}
  //               >
  //                 logout
  //               </Button>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>

  //   );
  // }

  return <>
  {userData ? (  
     <nav className={`${backdropClass} bg-gradient-to-b from-[#5fdfb7a7] to-white w-full h-[12em]`}>
     <div className={`container flex`}>
       <button
        className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
         aria-expanded={!isCollapsed}
         aria-label="Toggle navigation"
         onClick={() => setIsCollapsed(!isCollapsed)}
       >
         {isCollapsed ? <FiMenu className="text-5xl p-2 text-[#20B486]" /> : <FiX />}
       </button>
       <NavLink to="/">
         <Image
           src={IMAGES.lOGOIMAGE2}
           className="hidden lg:block mt-[1.5em] "
           alt="logo image is not loaded"
           
         />
       </NavLink>

       <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
         <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6">  {/* Adjusted gap here */}
           
           <li>
             <NavLink className="text-black !no-underline  hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
               Home
             </NavLink>
           </li>
           <li>
             <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/aboutUs">
               About us
             </NavLink>
           </li>
           <li>
             <a href="#" className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300">
               Courses
             </a>
           </li>
           <li>
             <NavLink className="text-black !no-underline whitespace-nowrap hover:!text-[#20B486] font-medium transition-colors duration-300" to="/contactUs">
               Contact us
             </NavLink>
           </li>
           <li>
             <NavLink className="text-black !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300" to="/">
               FAQ's
             </NavLink>
           </li>
          
           <li>
             <Button
               className="lg:ml-[35em] custome-reg whitespace-nowrap  bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white !no-underline font-medium px-4 py-2 rounded"    
               onClick={onLogout}
             >
               logout
             </Button>
           </li>
         </ul>
       </div>
     </div>
   </nav>

    
  ):(
    <nav className={`w-full bg-gradient-to-b from-[#5fdfb7a7] to-white sm:h-[10em] h-[12em]`}>
    <div className={`container mx-auto px-4`}>
    <button
       className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
        aria-expanded={!isCollapsed}
        aria-label="Toggle navigation"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <FiMenu className="text-5xl p-2 text-[#20B486] " /> : <FiX />}
      </button>
      <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-4`}>

        {currentPath === "/register" && (


          <NavLink
          
            className="custome-log bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white relative top-[2em] !no-underline font-medium px-4 py-2 rounded"
            to="/login"
          >
            sign in
          </NavLink>
          //   <Button className="custome-log bg-[#20B486] hover:bg-[#199e74] transition duration-300">
          //   <NavLink
          //     className="text-white !no-underline font-medium"
          //     to="/login"
          //   >
          //     sign in
          //   </NavLink>
          // </Button>

        )}
        {currentPath === "/login" && (
          //   <Button className="custome-reg bg-[#20B486] hover:bg-[#199e74] transition duration-300">
          //   <NavLink
          //     className="text-white !no-underline font-medium"
          //     to="/register"
          //   >
          //     create free account
          //   </NavLink>
          // </Button>

          <NavLink
            className="custome-reg bg-[#20B486]  relative top-[2em] hover:bg-[#199e74] transition duration-300 text-white !no-underline font-medium px-4 py-2 rounded"
            to="/register"
          >
            create free account
          </NavLink>


        )}

      </div>
    </div>
  </nav>
  )}
  </>
};


export default NavBar;