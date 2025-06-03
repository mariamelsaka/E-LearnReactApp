import { useLocation } from "react-router-dom";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import "./index.css"
import { FiMenu, FiX } from 'react-icons/fi'; // FiMenu = open, FiX = close
import Button from "../../Ui/Button";
import MemoNavItem from "../../MemoNavItem";
const navItems = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/aboutUs" },
  { label: "Courses", to: "/courses" },
  { label: "Contact us", to: "/contactUs" },
  { label: "FAQ's", to: "/faqs" }
];
const NavBar = () => {
  const { pathname } = useLocation();//this hook used to have acess to the path
  const currentPath = pathname;
  const [isCollapsed, setIsCollapsed] = useState(true);
  // ---------------------

  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // logout
  const onLogout = useCallback(() => {
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);//location is web api
    }, 1500);
  },[pathname])
  //-----------------------------
  useEffect(() => {
    setIsCollapsed(prev => {
      if (!prev) return true;
      return prev;
    });//for prevent re render same page each time
  }, [pathname]);

  const backdropClass = isCollapsed ? "" : "backdrop-blur-md h-[25em]";  // Change blur intensity as needed
  
  const memoizedNavItems = useMemo(() =>
  navItems.map((item) => (
    <MemoNavItem key={item.to} to={item.to}>
      {item.label}
    </MemoNavItem>
  )),
  []
);
const menuIcon = useMemo(() => <FiMenu className="text-5xl p-2 text-[#20B486]" />, []);
const closeIcon = useMemo(() => <FiX className="text-5xl p-2 text-[#20B486]" />, []);
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
            {isCollapsed ? menuIcon : closeIcon}
          </button>
          <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}>
            <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
              {memoizedNavItems}
              <li>
                <Button
                  id="logout"
                  onClick={onLogout}
                >
                  Log Out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    ) : (
      <nav className={`w-full bg-gradient-to-b from-[#5fdfb7a7] to-white sm:h-[10em] h-[12em]`}>
        <div className={`container mx-auto px-4`}>
          <button
            className="block lg:hidden rounded focus:outline-none focus:ring-2 focus:ring-[#20B486]"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? menuIcon : closeIcon}
          </button>
          <div className={`${isCollapsed ? 'hidden' : 'block'} lg:flex lg:items-center lg:space-x-4`}>

            {currentPath === "/register" && (
              <MemoNavItem
                wrapInLi={false}
                children="sign in"
                className="custome-log"
                useAlternateStyle={false}
                to="/login"
              />
            )}
            {currentPath === "/login" && (
              <MemoNavItem wrapInLi={false} children="create free account"
                className="custome-reg"
                useAlternateStyle={false}
                to="/register"
              />
            )}
          </div>
        </div>
      </nav>
    )}
  </>
};
export default memo(NavBar);