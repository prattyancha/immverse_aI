"use client"
import Image from "next/image";
import Input from "../components/Input";
import Link from "next/link";
import log_in from "../Images/login.jpg"
import { useState } from "react";

const defaultData = { email: "", password: ""};

const Login = () =>{
  const [login, setLoginData] = useState(defaultData);

  const onValueChange = (e) => {
    setLoginData({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
     if( !login.email || !login.password ){
        alert("All fields are mandatory!");
        return;
     }
  }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 min-h-screen bg-gray-400 justify-center items-center px-16 py-10">
        <div className="justify-center items-center w-full border-r">
          <div className=" bg-slate-100 justify-center items-center px-14 py-14 mt-0.5">
            <Image
              src={log_in}
              alt="signup"
              width={500}
              className="place-self-center pl-20 py-10"
            />
          </div>
        </div>
  
        <div className="justify-center items-center">
          <div className="bg-slate-100 px-16 py-32">
            <h1 className="text-3xl mb-12 text-center">Sign In</h1>
            <form>
              <Input label="Email" id="email" type="text" value={login.email} onChange={(e) => onValueChange(e)} />
              <Input
                label="Password"
                id="password"
                type="password"
                value={login.password}
                onChange={(e) => onValueChange(e)}
              />
              <button
              onClick={(e) => onLogin(e)}
              className="w-full bg-blue-300 border border-blue-300 text-white hover:border-blue-800 hover:text-blue-800 rounded-md p-2 mb-1 mt-5">
                Login
              </button>
              <p className="mt-1" style={{ textAlignLast: "center", p: 2 }}>
              Don't have an account? {" "}
                <Link className="text-blue-600" href={"/registration"}>
                Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login;