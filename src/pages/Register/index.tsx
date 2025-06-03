import PageLayout from "../../components/Layout/PageLayout";
import Form from "../../components/Ui/Form";
import Input from "../../components/Ui/Input";
import Label from "../../components/Ui/Label";
import Textarea from "../../components/Ui/Textarea";
import "./index.css";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { CredentialsRegister,IErrorResponse } from '../../interfaces/index';
import { registerSchema } from "../../validation";
import AxiosInstance from "../../config/axios.config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
 const defaultObj={
    name:"",
    email:"",
    password:"",
    username:"",
    address:""
   }
const Register = () => {
    useEffect(() => {
      document.title = "register";
    }, []);
    const navigate=useNavigate();
   
  const [user,setUser]=useState<CredentialsRegister>(defaultObj);

  const OnChangeHandlerReg = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser(prev=>({...prev, [name]: value }));
  },[]);
  const OnChangeHandlerRegTextArea = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setUser(prev=>({...prev, [name]: value }));
  },[]);

  
  const SubmitHandlerRegister=useCallback(async (event:FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    // const isValid = await validateForm();
      try {
        await registerSchema.validate(user, { abortEarly: false });
        console.log(user)
        const { status } = await AxiosInstance.post("/auth/local/register", user);
        console.log("Registration successful:",user);
        if (status === 200) {
          toast.success("You will navigate to the login page after 2 seconds.", {
            position: "bottom-center",
            duration: 1500,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          });
          setTimeout(() => {
            navigate('/login')
          }, 2000);
    
        }
      } catch (error) {
        const errorObj=error as AxiosError<IErrorResponse>;
        console.error("Error during registration:", error);
        toast.error(`${errorObj.response?.data.error.message}`, {
          position: "bottom-center",
          duration: 4000,
        });
        
      }
      setUser(defaultObj); 
      console.log(user);
    } ,[navigate,user])
   
  
  return (
    <>
      <PageLayout title="create new account">
        <div className="col-lg-8 col-md-8 col-sm-12">
          <Image src={IMAGES.register}  alt="error" />
          <Form onSubmit={SubmitHandlerRegister}>
            <div className="row" id="formInside-register">
              <div className="col-lg-6">
                  <Label htmlFor="name-register">name</Label>
                  <Input
                    type="text"
                    id="name-register"
                    placeholder="write your name"
                    name="name"
                    value={user.name}
                    onChange={OnChangeHandlerReg}
                  /> 
                  <Label htmlFor="email-register">Email address</Label>
                  <Input
                    type="email"
                    id="email-register"
                    placeholder="name@example.com"
                    autoComplete="email"
                    name="email"
                    value={user.email}
                    onChange={OnChangeHandlerReg}
                    required
                  />       
                  <Label htmlFor="Password-register">Password</Label>
                  <Input
                    title="password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    value={user.password}
                    onChange={OnChangeHandlerReg}
                    id="Password-register"
                    required
                  />     
              </div>
              <div className="col-lg-6">         
                  <Label htmlFor="UserName-register" className="labelUserName">user name</Label>
                  <Input
                    type="text"
                    id="UserName-register"
                    placeholder="write unique user name"
                    autoComplete="username"
                    name="username"
                    value={user.username}
                    onChange={OnChangeHandlerReg}
                    required
                  />        
                  <Label htmlFor="Textarea1-register"  className="address">
                  address
                  </Label>
                  <Textarea
                    title="address"
                    aria-describedby="address"
                    id="Textarea1-register"
                    name="address"
                    value={user.address}
                    onChange={OnChangeHandlerRegTextArea}
                    rows={3}
                  ></Textarea>
              </div>
            </div>
          </Form>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <Image
            src={IMAGES.graduationLoginRegister}
            id="imgGR-register"
            alt="error"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Register;
