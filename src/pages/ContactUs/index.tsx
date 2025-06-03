import PageLayout from "../../components/Layout/PageLayout";
import Input from "../../components/Ui/Input";
import Label from "../../components/Ui/Label";
import Textarea from "../../components/Ui/Textarea";
import "./index.css";
import Image from "../../components/Ui/Image";
import { IMAGES } from "../../config/assets";
import { CredentialsContactUs, IErrorResponse } from '../../interfaces/index';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { ContactUsSchema } from "../../validation";
import { AxiosError } from "axios";
import AxiosInstance from "../../config/axios.config";
import toast from "react-hot-toast";
import InputErrorMessage from "../../components/Ui/InputErrorMessage";
import { useCallback, useEffect } from "react";
import Form from "../../components/Ui/Form";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact us";
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ContactUsSchema),
  })
  const storageKey = "loggedInUser";
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;


  const onSubmit = useCallback(async (data: CredentialsContactUs) => {
    const payload = {
      ...data,
      users_permissions_user: userData.user.id,
    };

    if (payload.users_permissions_user != userData.user.id) {
      toast.error("There seems to be a mismatch with your account. Please try logging in again.", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }
    if (data.name != userData.user.name) {
      toast.error("The name you entered doesn't match your profile. Please double-check and try again.", {
        position: "bottom-center",
        duration: 4000,
      });
      return
    }
    if (data.email != userData.user.email) {
      toast.error("The email address doesn't match your account. Please ensure you're using the same email.", {
        position: "bottom-center",
        duration: 4000,
      });
      return
    }
    try {
      const { status } = await AxiosInstance.post(
        "/contact-uses",
        {
          data: payload
        },
        {
          headers: {
            Authorization: `Bearer ${userData.jwt}`,
          },
        }
      );
      if (status >= 200 && status < 300) {
        toast.success("Thank you! We’ve received your message and will be in touch soon.", {
          position: "bottom-center",
          duration: 5000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        reset({ name: "", email: "", description: "" }); 
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(`${errorObj.response?.data.error.message}`|| "An unexpected error occurred. Please try again later.", {
        position: "bottom-center",
        duration: 4000,
      });
    }
  },[userData, reset])
  
  return (
    <>
   
      <PageLayout title="Leave us a message">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name">Name</Label>
            <Input type="text" {...register("name")} id="contact-name" placeholder="enter your name" required />
            {errors["name"] && <InputErrorMessage msg={errors["name"]?.message} />}
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              {...register("email")}
              name="email"
              placeholder="enter your email"
              autoComplete="email"
              required
            />
            {errors["email"] && <InputErrorMessage msg={errors["email"]?.message} />}
            <Label htmlFor="description">description</Label>
            <Textarea title="description" id="description"
              aria-label="Description of the message" {...register("description")} rows={3} required></Textarea>
            {errors["description"] && <InputErrorMessage msg={errors["description"]?.message} />}

            {/* <button type="submit">send</button> */}
          </Form>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 contact-info">
          <p>
            Weekend UX <br />
            B 37/3 Ground Floor Double <br />
            StoryRamesh Nagar , Near Raja Garden <br />
            Chowk.Delhi: 110015 <br />
            +91 9599272754 <br />
            hello@info.com.ng
          </p>
          {/* i still see no need for it but i will keep it now */}
          <div className="social-icons">
            <Image src={IMAGES.youtubeContactUs} className="Youtube" alt="Youtube" />
            <Image src={IMAGES.instagramContactUs} className="Instagram" alt="Instagram" />
            <Image src={IMAGES.facebookContactUs} className="Facebook" alt="Facebook" />
            <Image src={IMAGES.twitterContactUs} className="Twitter" alt="Twitter" />
            <Image src={IMAGES.rectangle19ContactUs} alt="error" className="mapImg" />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ContactUs;
