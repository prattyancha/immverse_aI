"use client";
import Link from "next/link";
import Input from "../components/Input";
import signup from "../Images/Sign_up.jpg";
import Image from "next/image";
import { useState } from "react";
import { useSelector } from "react-redux";

const defaultData = { name: "", email: "", password: "", confirm_password: "" };

const Registration = () => {
  const{authState} =  useSelector((store) => store.login);
  const [registrationData, setRegistrationData] = useState(defaultData);

  const onValueChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value,
    });
  };

  const onRegistration = (e) => {
    e.preventDefault();
     if(!registrationData.name || !registrationData.email || !registrationData.password || !registrationData.confirm_password){
        alert("All fields are mandatory!");
        return;
     }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-screen bg-gray-400 justify-center items-center px-16 py-10">
      <div className="justify-center items-center w-full border-r">
        <div className=" bg-slate-100 justify-center items-center px-14 py-14">
          <Image
            src={signup}
            alt="signup"
            width={500}
            className="place-self-center pl-20 py-10"
          />
        </div>
      </div>

      <div className="justify-center items-center">
        <div className="bg-slate-100 px-16 py-16">
          <h1 className="text-3xl mb-4 text-center">Sign Up</h1>
          <form>
            <Input
              label="Name"
              id="name"
              type="text"
              value={registrationData.name}
              onChange={(e) => onValueChange(e)}
            />
            <Input
              label="Email"
              id="email"
              type="text"
              value={registrationData.email}
              onChange={(e) => onValueChange(e)}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              value={registrationData.password}
              onChange={(e) => onValueChange(e)}
            />
            <Input
              label="Confirm Password"
              id="confirm password"
              type="password"
              value={registrationData.confirm_password}
              onChange={(e) => onValueChange(e)}
            />
            <button
             className="w-full bg-blue-300 border border-blue-300 text-white hover:border-blue-800 hover:text-blue-800 rounded-md p-2 mb-2"
             onClick={(e) => onRegistration(e)}
             >
              Register
            </button>
            <p style={{ textAlignLast: "center", p: 2 }}>
              Already have an account ?{" "}
              <Link className="text-blue-600" href={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
