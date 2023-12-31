"use client"
import Image from "next/image";
import Input from "../components/Input";
import reset from "../Images/reset_password.jpg";
import Link from "next/link";
import { useState } from "react";

const defaultData = { email: "", password: "", confirm_password: "" };


const PasswordReset = () => {
  const [resetData, setResetData] = useState(defaultData);

  const onValueChange = (e) => {
    setResetData({
      ...resetData,
      [e.target.name]: e.target.value,
    });
  };

  const onReset = (e) => {
    e.preventDefault();
     if(!resetData.email || !resetData.password || !resetData.confirm_password){
        alert("All fields are mandatory!");
        return;
     }
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-screen bg-gray-400 justify-center items-center px-16 py-10">
      <div className="justify-center items-center w-full border-r">
        <div className=" bg-slate-100 justify-center items-center px-14 py-14">
          <Image
            src={reset}
            alt="signup"
            width={500}
            className="place-self-center pl-20 py-10"
          />
        </div>
      </div>

      <div className="justify-center items-center">
        <div className="bg-slate-100 px-16 py-24">
          <h1 className="text-3xl mb-8 text-center">Reset Password</h1>
          <form>
            <Input label="Email" id="email" type="text" value={resetData.email}  onChange={(e) => onValueChange(e)} />
            <Input
              label="Password"
              id="password"
              type="password"
              value={resetData.password}
              onChange={(e) => onValueChange(e)}
            />
            <Input
              label="Confirm Password"
              id="confirm password"
              type="password"
              value={resetData.confirm_password}
              onChange={(e) => onValueChange(e)}
            />
            <button
            onClick={(e)=> onReset(e)}
            className="w-full bg-blue-300 border border-blue-300 text-white hover:border-blue-800 hover:text-blue-800 rounded-md p-2 mb-4">
              Reset
            </button>
            <p className="mt-0.5" style={{ textAlignLast: "center", p: 2 }}>
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

export default PasswordReset;
