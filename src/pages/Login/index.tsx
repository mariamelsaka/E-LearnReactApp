import PageLayout from "../../components/Layout/PageLayout";
import Form from "../../components/Ui/Form";
import Input from "../../components/Ui/Input";
import Label from "../../components/Ui/Label";
import "./index.css";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { CredentialsLogin, IErrorResponse } from '../../interfaces/index';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginSchema } from "../../validation";
import { AxiosError } from "axios";
import AxiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import InputErrorMessage from "../../components/Ui/InputErrorMessage";
import { useCallback, useEffect } from "react";

const Login = () => {
    useEffect(() => {
      document.title = "Login";
    }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,  // Include reset from useForm
    watch
  } = useForm({
    resolver: yupResolver(loginSchema),
    
  })
  
console.log(watch()); // This will log the form va
  const onSubmit = useCallback(async (data:CredentialsLogin) => {
    console.log(data);
    // reset(); // Clear the form fields after submission
    try {
      //  * 2 - Fulfilled => SUCCESS => (OPTIONAL)
      const { status, data: resData } = await AxiosInstance.post(
        "/auth/local",
        data
      );
      console.log(data);
      console.log(resData);
      // const { status } = await AxiosInstance.post("/auth/local/login", data);
      if (status === 200) {
        toast.success("You will navigate to the home page after 2 seconds.", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
          
        });
        localStorage.setItem("loggedInUser", JSON.stringify(resData));
        setTimeout(() => {
          location.replace("/");//location is web api, replace change the current url to other url
          // navigate('/',{}) this will not work because will not understand what happen in the local storage
          //also navigate when move to other page it does not refresh the page and we need to refresh the page to go to home
        }, 2000);
      }
    } catch (error) {
      //  * 3 - Rejected => FAILED => (OPTIONAL)
      
      console.log(error);
      const errorObj=error as AxiosError<IErrorResponse>;
      console.log(errorObj.response)
      console.log(errorObj.response?.data?.error?.message)
      toast.error(`${errorObj.response?.data.error.message}`, {
        position: "bottom-center",
        duration: 4000,
      });

    }
  },[])
  return (
    <>

      <PageLayout title="welcome to our website">
        <div className="col-lg-6 col-md-6 col-sm-12">     
          <Image src={IMAGES.keyLogin} alt="error" />
          <Form onSubmit={handleSubmit(onSubmit)}>
              <Label htmlFor="email-login">Email address</Label>
              <Input
                type="email"
                {...register("identifier")}
                name="identifier"
                id="email-login"
                placeholder="name@example.com"
                autoComplete="email"
                required
              />
            {errors["identifier"] && <InputErrorMessage msg={errors["identifier"]?.message} />}

              <Label htmlFor="Password-login">Password</Label>
              <Input
                title="password"
                {...register("password")}
                name="password"
                type="password"
                id="Password-login"
                autoComplete="current-password"
                required
              />
            {errors["password"] && <InputErrorMessage msg={errors["password"]?.message} />}
          </Form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Image
            src={IMAGES.graduationLoginRegister}
            id="imgGR-login"
            alt="error"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Login;
