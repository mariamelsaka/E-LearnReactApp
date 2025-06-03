import {  memo, ReactNode } from "react"
import "./index.css"
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
children:ReactNode,
className?:string,

}

const Button = ({children,className,...rest}:IProps) => {
  return (
    <button   className={`${className || ""} btn custom-btn`}  {...rest}>{children} </button>
  )
}

export default memo(Button)
