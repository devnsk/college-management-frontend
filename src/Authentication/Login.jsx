import React, { useState } from "react";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import Inputbox1 from "../Components/Inputbox1";
import { EmailIcon, PasswordIcon, UserIcon } from "../Components/SvgIcons";
import PrimaryButton from "../Components/PrimaryButton";
import Button2 from "../Components/Button2";
import Loader from "./../Components/Loader";
import { Toaster, toast } from "sonner";
import fulllogo from "../assets/CompanyAssets/ThinkerscaveFullNoBG.png";
import sideimg from "../assets/AuthenticationAsset/SideImage.png";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [LoaderState, setLoader] = useState(false);
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const navigate = useNavigate();
  const validateForm = () => {
    // Email validation
    // Username Validation
    if (!Username.trim()) {
      toast.error("Please Enter The Username");
    } else if (Username.length < 5) {
      toast.error("Username must contain at least 5 characters");
    } else if (!/^[a-z0-9\-_]+$/i.test(Username)) {
      toast.error(
        "Username format is incorrect. Only letters, numbers, hyphens, and underscores are allowed. No spaces."
      );
    }
    // Password validation
    if (!password.trim()) {
      toast.error("Password is required.");
      return false;
    } else if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    }

    return true;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        toast.success("Form submitted successfully!");
      }, 2000);
    }
  };

  const handleButton2Click = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/signup");
    }, 2000);
  };

  const handleForgotPasswordSubmit = () => {
    setForgotPasswordOpen(false);
    toast.success("Password reset instructions sent to your email!");
  };
  return (
    <section className="w-screen h-screen p-3 flex flex-col justify-center items-center">
      {LoaderState && (
        <div className="absolute w-full h-full bg-white bg-opacity-75 flex justify-center items-center z-50">
          <Loader />
        </div>
      )}
      <div>
        <img src={fulllogo} alt="" className="hidden st:block w-auto h-60" />
      </div>
      <div className="w-full h-auto p-4 flex flex-col justify-center items-center rounded-lg shadow-2xl bg-[#FBFBFB] st:w-[30rem] sd:w-full sd:flex-row md:w-[65rem] ">
        <img src={fulllogo} alt="" className="w-28 st:hidden" />
        <img src={sideimg} alt="" className="hidden sd:block" />
        <div className="w-full flex flex-col justify-center items-center gap-4 sd:p-8">
          <h2 className="text-2xl font-black">Let's Get Started</h2>
          <Inputbox1
            label="Username"
            type="text"
            id="username"
            icon={UserIcon}
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="w-full flex justify-end items-center">
            <Inputbox1
              label="Password"
              type={PasswordVisible ? "text" : "password"}
              id="password"
              value={password}
              icon={PasswordIcon}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="absolute text-lg mr-5 hover:text-blue-500 transition-all duration-500"
              onClick={() => setPasswordVisible((prev) => !prev)}
            >
              {PasswordVisible ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </span>
          </div>
          <p
            className="text-sm self-end"
            onClick={() => setForgotPasswordOpen(true)}
          >
            Forgot Password?
          </p>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <span className="w-full" onClick={handleSignIn}>
              <PrimaryButton btntext={"Sign In"} />
            </span>
            <span className="w-full" onClick={handleButton2Click}>
              <Button2 btntext={"Don't have an account?"} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 mt-10 text-base">
        <p className="font-medium hover:text-blue-700">Terms & Conditions</p>
        <span>||</span>
        <p className="font-medium hover:text-blue-700">Privacy Policy</p>
      </div>
      <div className="hidden st:block mt-3 font-bold">
        Copyright <span className="text-lg">&copy; </span>
        {new Date().getFullYear()} ThinkersCave
      </div>
      <Toaster position="top-center" closeButton duration={2000} richColors />
      <ForgotPassword
        isOpen={isForgotPasswordOpen}
        onClose={() => setForgotPasswordOpen(false)}
        onSubmit={handleForgotPasswordSubmit}
      />
    </section>
  );
};

export default Login;
