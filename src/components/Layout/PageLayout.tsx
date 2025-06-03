import { useLocation } from "react-router-dom";
import "./PageLayout.css"
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { memo } from "react";
import Animate from "../Animate";
interface IProps {
    children: React.ReactNode;
    title: string;

}

const PageLayout = ({ children, title }: IProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  // Check if we are on Login or Register pages
  const isLoginOrRegisterPage = currentPath === "/login" || currentPath === "/register";
  return (
    <>
     <Animate>
     <div className="PageLayout">
        <Image
          src={IMAGES.group70PageLayout}
          id="img1-PageLayout"
          alt="background decorative pattern"
        />
        <div className="card shadow-lg" id="PageLayoutCard">
          <div className="card-body">
            <h5 className="card-title" id="title-PageLayout">{title}</h5>
            <div className="row">
             {children}
            </div>
          </div>
        </div>

        <Image
          src={IMAGES.group71PageLayout}
          id="img2-PageLayout"
          alt="background decorative pattern"

        />
        {currentPath==="/contactUs"&&
        <>
        <Image
          src={IMAGES.group81PageLayout}
          id="img3-PageLayout"
          className="img3-AboutUs33" 
          alt="background decorative pattern"

        />
        <Image
          src={IMAGES.group82PageLayout}
          className="img4-AboutUs" 
          id="img4-PageLayout"
          alt="background decorative pattern"/>
          </>
        }
         {isLoginOrRegisterPage && (
         <>
        <Image
          src={IMAGES.group81PageLayout}
          id="img3-PageLayout"
          alt="background decorative pattern"

        />
        <Image
          src={IMAGES.group82PageLayout}
          id="img4-PageLayout"
          alt="background decorative pattern"
        />
      </>
         )
}
      
      
      </div>
      </Animate>
    </>
  )
}

export default memo(PageLayout)