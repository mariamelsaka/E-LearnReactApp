import { useLocation } from "react-router-dom";
import Image from "../../Ui/Image";
import { IMAGES } from "../../../config/assets";
import "./index.css"
import { memo } from "react";
const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  if (currentPath === "/login" || currentPath === "/register") {
    return (
      <nav className="flex flex-wrap justify-around bg-[#101828] py-6 mg-mobile">
        <Image src={IMAGES.lOGOIMAGE2} alt="logo" className="w-[5%] h-[5%] mt-2" />
        <div className="flex flex-wrap justify-center items-center mt-5 w-full">
          <p className="text-[#98A2B3] text-center w-full mr-2">
            © 2022 Ed-Circle. All rights reserved.
          </p>
          <Image src={IMAGES.footerTwitter} width="24px" height="24px" alt="footer twitter" className="mx-2" />
          <Image src={IMAGES.footerLinkedIn} width="24px" height="24px" alt="footer LinkedIn" className="mx-2" />
          <Image src={IMAGES.footerGitHub} width="24px" height="24px" alt="footer GitHub" className="mx-2" />
          <Image src={IMAGES.footerFacebook} width="24px" height="24px" alt="footer Facebook" className="mx-2" />
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex flex-wrap justify-around bg-[#101828] py-10 mg-mobile">
        <div className="flex flex-wrap w-full">
          <ul className="flex flex-col items-center text-center m-5">
            <li className="mb-2">
              <Image src={IMAGES.lOGOIMAGE2} alt="logo" />
            </li>
            <li className="text-white mt-2">
              Top learning experiences that create more
              <br />
              talent in the world.
            </li>
          </ul>

          <ul className="flex flex-col items-center text-center m-5">
            <li className="text-[#98A2B3] font-bold">Product</li>
            <li className="text-white mt-2">Overview</li>
            <li className="text-white mt-2">Features</li>
            <li className="text-white mt-2">Solutions</li>
            <li className="text-white mt-2">Tutorials</li>
            <li className="text-white mt-2 mb-10">Pricing</li>
          </ul>

          <ul className="flex flex-col items-center text-center m-5">
            <li className="text-[#98A2B3] font-bold">Company</li>
            <li className="text-white mt-2">About us</li>
            <li className="text-white mt-2">Careers</li>
            <li className="text-white mt-2">Press</li>
            <li className="text-white mt-2 mb-10">News</li>
          </ul>

          <ul className="flex flex-col items-center text-center m-5">
            <li className="text-[#98A2B3] font-bold">Social</li>
            <li className="text-white mt-2">Twitter</li>
            <li className="text-white mt-2">LinkedIn</li>
            <li className="text-white mt-2">GitHub</li>
            <li className="text-white mt-2 mb-10">Dribbble</li>
          </ul>

          <ul className="flex flex-col items-center text-center m-5">
            <li className="text-[#98A2B3] font-bold">Legal</li>
            <li className="text-white mt-2">Terms</li>
            <li className="text-white mt-2">Privacy</li>
            <li className="text-white mt-2">Cookies</li>
            <li className="text-white mt-2 mb-10">Contact</li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center items-center mt-5 w-full">
          <p className="text-[#98A2B3] text-center w-full mr-2">
            © 2022 Ed-Circle. All rights reserved.
          </p>
          <Image src={IMAGES.footerTwitter} width="24px" height="24px" alt="footer twitter" className="mx-2" />
          <Image src={IMAGES.footerLinkedIn} width="24px" height="24px" alt="footer LinkedIn" className="mx-2" />
          <Image src={IMAGES.footerGitHub} width="24px" height="24px" alt="footer GitHub" className="mx-2" />
          <Image src={IMAGES.footerFacebook} width="24px" height="24px" alt="footer Facebook" className="mx-2" />
        </div>
      </nav>
    );
  }
};

export default memo(Footer);
