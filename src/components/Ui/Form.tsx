import React, { memo } from "react"
import Button from "./Button"
import {ReactNode } from "react"
interface IProps extends React.FormHTMLAttributes<HTMLFormElement>{
    children:ReactNode

}
const Form = ({children,...rest}:IProps) => {
  return (
    <>
    <form {...rest}>     
        {React.Children.map(children,(child)=>{
            return <div className="mb-3">
            {child}
            </div>
        })} 
           
            <Button type="submit" className="btn-lg btn-contact-us">
              Send
            </Button>
          </form>
    </>
  )
}

export default memo(Form)