import { forwardRef, memo, Ref } from "react"
// import { forwardRef, Ref } from "react"

/* eslint-disable @typescript-eslint/no-empty-object-type */
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({...rest}:IProps,ref:Ref<HTMLInputElement>) => {
  return (
    
    <input
    // you can't custome class name
    className="form-control" 
    ref={ref}
    {...rest} />

  )
})

// export default Input
export default memo(Input)