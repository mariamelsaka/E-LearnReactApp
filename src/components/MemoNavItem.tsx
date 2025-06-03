import { memo, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react"; // already imported
interface MemoNavItemProps {
    to: string;
    children: ReactNode;
    className?: string;
    style?:CSSProperties 
    wrapInLi?: boolean; // default true to wrap in <li>
    useAlternateStyle?: boolean;//for different classes
    
}
const MemoNavItem = ({ to, className,style, children, wrapInLi = true, useAlternateStyle = true  }: MemoNavItemProps) => {
    const content = (
        <NavLink
        className={`${useAlternateStyle
        ? (className || "whitespace-nowrap text-black hover:!text-[#20B486] font-medium transition-colors duration-300 !no-underline")
        // : "bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white relative top-[2em] !no-underline font-medium px-4 py-2 rounded"
        :`bg-[#20B486] hover:bg-[#199e74] transition duration-300 text-white relative top-[2em] !no-underline font-medium px-4 py-2 rounded ${className || ""}`
        }`} 
        style={style}
        to={to} >
        {children}
        </NavLink>)
    return wrapInLi ? <li>{content}</li> : content;
}
export default memo(MemoNavItem)