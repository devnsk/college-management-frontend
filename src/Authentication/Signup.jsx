import React, { useState } from "react";
import Inputbox1 from "../Components/Inputbox1";
import Button2 from "../Components/Button2";
import PrimaryButton from "../Components/PrimaryButton";
import {
  ContactnoIcon,
  EmailIcon,
  PasswordIcon2,
  UserIcon,
  UserIconFname,
  UserIconLname,
} from "../Components/SvgIcons";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import fulllogo from "../assets/CompanyAssets/ThinkerscaveFullNoBG.png";
import sideimg from "../assets/AuthenticationAsset/SideImage.png";
import Loader from "../Components/Loader";
import { register } from "../Services/AuthService";

const Signup = () => {
  const [Fname, setFname] = useState("");
  const [LName, setLName] = useState("");
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Contactno, setContactno] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [LoaderState, setLoader] = useState(false);

  const navigate = useNavigate();
  const validateForm = () => {
    // First Name Validation
    if (!Fname.trim()) {
      toast.error("Please Enter Your First Name");
      return false;
    } else if (!/^((?=[a-z \']).)+$/i.test(Fname)) {
      toast.error("First Name Format is not Supported");
      return false;
    }

    // Last Name Validation
    if (!LName.trim()) {
      toast.error("Please Enter Your Last Name");
      return false;
    } else if (!/^((?=[a-z \']).)+$/i.test(LName)) {
      toast.error("Last Name Format is not Supported");
      return false;
    }

    if (!Username.trim()) {
      toast.error("Please Enter The Username");
    } else if (Username.length < 5) {
      toast.error("Username must contain at least 5 characters");
    } else if (!/^[a-z0-9\-_]+$/i.test(Username)) {
      toast.error(
        "Username format is incorrect. Only letters, numbers, hyphens, and underscores are allowed. No spaces."
      );
    }

    // Contact Number Validation
    if (!Contactno.trim()) {
      toast.error("Contact Number Required");
      return false;
    } else if (
      !/((([\+?\(91\)\s?]|\-|0|((00|\+)?91))-?)?[7-9]\d{9,11})/s.test(Contactno)
    ) {
      toast.error("Mobile Number is Invalid");
      return false;
    }

    // Email Validation
    if (!Email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(Email)) {
      toast.error("Invalid email format.");
      return false;
    }

    // Password validation
    if (!Password.trim()) {
      toast.error("Password is required.");
      return false;
    } else if (Password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return false;
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        Password
      )
    ) {
      toast.error(
        "Password must contain at least one uppercase letter, one lowercase letter, one digit and one special character"
      );
      return false;
    }

    // Confirm Password Validation
    if (Password != ConfirmPassword) {
      toast.error("Password does not match");
      return false;
    }

    return true;
  };
  const handleSignupButton = async() => {
    if (validateForm()) {
      setLoader(true);
      console.log("inside the handleSignup");
      const userData = {
        firstName: Fname,
        middleName: '',
        lastName: LName,
        email: Email,
        userName: Username,
        mobileNumber: Contactno,
        password: Password,
        address:'Jatni',
        city:'Bhubaneswar',
        state:'Odisha',
        parentUserName:'GOD'
      };
      try {
        const result = await register(userData);
        setLoader(false);
        console.log(result);
        toast.success("Registration successful!");
        navigate("/");
      } catch (error) {
        setLoader(false);
        toast.error("Registration failed. Please try again.");
      }
      // setTimeout(() => {
      //   setLoader(false);
      //   toast.success("Form submitted successfully!");
      // }, 2000);
    }
  };
  const handleButton2Click = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      navigate("/login");
    }, 2000);
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
      <div className="w-full h-auto mt-12 p-8 flex flex-col justify-center items-center rounded-lg shadow-2xl bg-[#FBFBFB] st:mt-0 st:w-[40rem] sd:w-full sd:flex-row md:w-[65rem]">
        <img
          src={fulllogo}
          alt=""
          className="w-28 mt-10 st:w-32 st:mt-0 st:hidden"
        />
        <img src={sideimg} alt="" className="w-[25rem] st:mt-0 sd:w-[28rem]" />
        <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
          <h2 className="text-xl font-black st:text-3xl">
            Explore The Knowledge
          </h2>
          <div className="w-full flex flex-col gap-4 st:flex-row">
            <Inputbox1
              label={"First Name"}
              id={"fname"}
              type={"text"}
              icon={UserIconFname}
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <Inputbox1
              label={"Last Name"}
              id={"lname"}
              type={"text"}
              icon={UserIconLname}
              value={LName}
              onChange={(e) => setLName(e.target.value)}
            />
          </div>
          <Inputbox1
            label={"Email"}
            id={"email"}
            type={"email"}
            icon={EmailIcon}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="w-full flex flex-col gap-4 st:flex-row">
            <Inputbox1
              label={"Username"}
              id={"username"}
              icon={UserIcon}
              type={Username}
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Inputbox1
              label={"Contact No."}
              id={"contactno"}
              icon={ContactnoIcon}
              type={"tel"}
              value={Contactno}
              onChange={(e) => setContactno(e.target.value)}
            />
          </div>
          <Inputbox1
            label={"Password"}
            id={"password"}
            icon={PasswordIcon2}
            type={"password"}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Inputbox1
            label={"Confirm Password"}
            id={"confirmpass"}
            icon={PasswordIcon2}
            type={"password"}
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="w-full flex flex-col gap-3 st:flex-row">
            <PrimaryButton
              btntext={"Get Started"}
              onClick={handleSignupButton}
            />
            <Button2
              btntext={"Already have an account?"}
              onClick={handleButton2Click}
            />
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
    </section>
  );
};
export default Signup;
