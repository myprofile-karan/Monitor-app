import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/users", {
        email,
        password,
      });
      console.log(res);
      if (email === "admin123@gmail.com" && password === "12345678") {
        localStorage.setItem("isAdmin", JSON.stringify(true));
        toast.success("Admin Login Successful");
        navigate("/admin/master-settings");
      } else {
        localStorage.setItem("isAdmin", JSON.stringify(false));
        toast.success("User Login Successful");
        navigate(`/admin/dashboard/${email}`);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-[50%] h-full">
        <div className="images h-full w-full">
          <img
            src="./assets/login-side-img.png"
            className="w-full h-full object-cover object-right-top"
            alt=""
          />
        </div>
      </div>
      <div className="w-[50%] h-full flex justify-center">
        <div className="w-[70%] h-[300px] mt-28 flex flex-col gap-5 px-5">
          <div className="flex items-center justify-between">
            <h3 className="text-[#F33823] text-sm font-bold">
              Control Tower Module From
            </h3>
            <div className="w-[140px]">
              <img
                src="./assets/logo.png"
                className="w-full object-cover"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-[1.1rem] font-medium">
            Enter Your Credentials to Login
          </h1>
          <form className="flex flex-col gap-2">
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                value={email}
                placeholder="Admin@resoluteai.in"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-2 px-3 rounded-md text-sm border-2 border-gray-200 focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 rounded-md text-sm border-2 border-gray-200 focus:outline-none"
                required
              />
            </div>
            <div className="flex gap-2 items-center my-3">
              <input
                type="checkbox"
                className="rounded-md text-sm border-2 border-gray-200 focus:outline-none"
              />
              <label className="text-sm" htmlFor="checkbox">
                Remember me
              </label>
            </div>

            <button
              onClick={handleSignin}
              className="w-full bg-[#F33823] text-white py-2 text-sm"
            >
              Sign In
            </button>

            <button className="text-[#F33823] text-left text-sm mt-5 font-medium">
              Forgot your Password?
            </button>
          </form>

          <div className="flex flex-col items-center gap-3 mt-20">
            <span className="text-[#F33823] text-sm font-medium">
              A Product From
            </span>
            <div className="w-[130px]">
              <img src="./assets/logo-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
