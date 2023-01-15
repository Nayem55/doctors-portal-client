import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const handleLogin=(data)=>{
    console.log(data)
  }
  return (
    <div className="h-[600px] flex justify-center items-center p-6 my-20">
      <div className="w-96 flex flex-col items-center border border-secondary px-7 py-12">
        <h1 className="text-2xl text-center text-primary">Login</h1>
        <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-secondary">Email</span>{" "}
            </label>
            <input
              type="text"
              className="input input-bordered bg-white border-secondary w-full max-w-xs"
              {...register("email")}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text text-secondary">Password</span>{" "}
            </label>
            <input
              type="password"
              className="input input-bordered bg-white border-secondary w-full max-w-xs "
              {...register("password")}
            />
            <label className="label">
              {" "}
              <span className="label-text text-secondary">
                Forget password?
              </span>{" "}
            </label>
          </div>
          <input
            type="submit"
            className=" btn btn-seondary text-white w-full max-w-xs mt-6"
            value="Login"
          />
          <p className="mt-2 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary font-bold">
              Sign up{" "}
            </Link>
          </p>
            <div className="divider text-secondary">OR</div>
            <button className="btn btn-outline btn-secondary w-full">CONTINUE WITH GOOGLE</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
