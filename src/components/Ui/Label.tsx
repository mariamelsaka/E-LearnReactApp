import { memo, ReactNode } from "react"

interface IProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children:ReactNode,
    className?:string,
}

const Label = ({children,...rest}:IProps) => {
  return (
    
    <label  className="label-control" {...rest}>
    {children}
    </label>

  )
}

export default memo(Label);