import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import  auth  from '../../firebase.init'
import google from '../Login/google.png'

const Signup = () => {
  const { register, formState: { errors }, handleSubmit} = useForm();
  const [ createUserWithEmailAndPassword, user, loading, error ] = useCreateUserWithEmailAndPassword(auth);
  const navigqate = useNavigate();

  useEffect(()=>{
    if(user){
        navigqate('/')
    }
  },[user])

  const handleSignup = (data) => {
    if(loading){
        return
    }
    createUserWithEmailAndPassword(data.email,data.password)
  };
  return (
    <div className="pt-20 lg:pt-0">
      <div className="h-[600px] flex justify-center items-center p-6 my-20">
        <div className="w-96 flex flex-col items-center border border-secondary px-7 py-12">
          <h1 className="text-2xl text-center text-primary">Signup</h1>
          <form className="w-full" onSubmit={handleSubmit(handleSignup)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-secondary">Name</span>{" "}
              </label>
              <input
                type="text"
                className="input input-bordered bg-white border-secondary w-full max-w-xs"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-secondary">Email</span>{" "}
              </label>
              <input
                type="email"
                className="input input-bordered bg-white border-secondary w-full max-w-xs"
                {...register("email", {
                  required: "Email address is required",
                })}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text text-secondary">Password</span>{" "}
              </label>
              <input
                type="password"
                className="input input-bordered bg-white border-secondary w-full max-w-xs "
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must contain atleast 6 characters",
                  },
                  pattern:{value:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/, message:"Password must contain uppercase, number and special characters"}
                })}
              />
              {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
              )}
              <label className="label">
                {" "}
                <span className="label-text text-secondary">
                  Forget password?
                </span>{" "}
              </label>
            </div>
            <input
              type="submit"
              className=" btn btn-seondary text-white w-full max-w-xs mt-6 hover:bg-primary hover:border-none"
              value="Sign up"
            />
               <p className="text-red-600 mt-2">{error?.message}</p>

            <p className="mt-2 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold">
                Login{" "}
              </Link>
            </p>
          </form>
            <div className="divider text-secondary"> OR</div>
            <button className="btn btn-outline btn-secondary w-full">
                <img src={google} className="w-8 mr-2" alt="" />
              CONTINUE WITH GOOGLE
            </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
