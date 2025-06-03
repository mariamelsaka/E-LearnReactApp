// import { NavLink, useLocation } from "react-router-dom";
import "./index.css";
// import { useEffect, useState } from "react";
// import Image from "../../Ui/Image";
// import { IMAGES } from "../../../config/assets";

// const NavBar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const [isCollapsed, setIsCollapsed] = useState(true); // Track collapse state
//   useEffect(() => {
//     setIsCollapsed(true); // Close the navbar when the route changes
//   }, [location.pathname]);
//   if (currentPath == "/login" || currentPath == "/register") {
//     return (
//       <>
//          <nav className="navbar navbar-expand-lg">
//           <div className="container-fluid">
//             <Button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               // Correct usage of aria-expanded with valid string values
//               // aria-expanded={isCollapsed ? "false" : "true"}
//               aria-expanded={!isCollapsed} // Use string values for ARIA
//               aria-label="Toggle navigation"
//               onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the state
//             >
//               <span className="navbar-toggler-icon"></span>
//             </Button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//               {currentPath === "/register" && (
//             //  add  d-lg-none to hide the button when page is large
//               // <NavLink className="btn nav-link custom-link" to="/login">
//               <li className="nav-item">
//                 {/* <NavLink className="btn nav-link custom-link d-lg-none" to="/login"> */}
//                 <NavLink className="btn nav-link custom-link custome-log"  to="/login">
//                 sign in
//               </NavLink>
//               </li>

//           )}
//           {currentPath === "/login" && ( 
//              // d-lg-none
//              <li className="nav-item">
//               <NavLink className="btn nav-link custom-link custome-reg" to="/register" >
//                 create free account
//               </NavLink>
//               </li>
//           )}
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg">
//           <div className="container-fluid">
//             <NavLink className="nav-link" to="/">
//               <Image
//                 src={IMAGES.lOGOIMAGE2}
//                 className="d-lg-block d-none"
//                 id="logo"
//                 width="31%"
//                 alt="logo image is not loaded"
//               />
//             </NavLink>

//             <Button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded={!isCollapsed} // Use string values for ARIA
//               aria-label="Toggle navigation"
//               onClick={() => setIsCollapsed(!isCollapsed)} // Toggle the state
//             >
//               <span className="navbar-toggler-icon"></span>
//             </Button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <NavLink
//                     className="nav-link"
//                     to="/"
//                   >
//                     Home
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/aboutUs">
//                     About us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     courses
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <NavLink className="nav-link" to="/contactUs">
//                     contact us
//                   </NavLink>
//                 </li>
//                 <li className="nav-item" id="faq">
//                   <NavLink className="nav-link" to="/ddd">
//                     FAQ's
//                   </NavLink>
//                 </li>

//                 <li className="nav-item" id="signIn">
//                   <NavLink className="nav-link" to="/login">
//                     sign in
//                   </NavLink>
//                 </li>

//                 <li className="nav-item"> 
//                     <NavLink className="btn nav-link custom-link" to="/register">
//                       create free account
//                     </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
// };

// export default NavBar;

import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../../Ui/Image";
import { IMAGES } from "../../../config/assets";
import Button from "../../Ui/Button";


const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsCollapsed(true);
  }, [location.pathname]);

  if (currentPath === "/login" || currentPath === "/register") {
    return (
      <nav className="bg-gradient-to-b from-[#5fdfb7a7] to-white h-[200px]">
        <div className="container mx-auto px-4">
          <button
            className="navbar-toggler block lg:hidden"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-4`}>
            <ul className="flex flex-col lg:flex-row gap-4">
              {currentPath === "/register" && (
                <li>
                  <NavLink
                    className="text-black !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300"
                    to="/login"
                  >
                    sign in
                  </NavLink>
                </li>
              )}
              {currentPath === "/login" && (
                <li>
                  <NavLink
                    className="text-black !no-underline hover:text-[#20B486] font-medium transition-colors duration-300"
                    to="/register"
                  >
                    create free account
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      //     <nav className="bg-gradient-to-b from-[#5fdfb7a7] to-white min-h-[100px] p-4">
      // <div className="flex flex-wrap justify-between items-center mb-0">
      <nav className="bg-gradient-to-b from-[#5fdfb7a7] to-white h-[200px]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <NavLink to="/">
          <Image
            src={IMAGES.lOGOIMAGE2}
            className="hidden lg:block"
            id="logo"
            width="31%"
            alt="logo image is not loaded"
          />
        </NavLink>
    
        <button
          className="navbar-toggler block lg:hidden"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
    
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
            <li className="ml-auto lg:ml-[400px]">
              <NavLink className="text-black whitespace-nowrap  !no-underline hover:!text-[#20B486] font-medium transition-colors duration-300" to="/login">
                sign in
              </NavLink>
            </li>
            <li>
              <Button className="bg-[#20B486] hover:bg-[#199e74] transition duration-300">
                <NavLink
                  className="text-white !no-underline font-medium"
                  to="/register"
                >
                  create free account
                </NavLink>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    );
  }
};

export default NavBar;