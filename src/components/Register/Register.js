import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <h1 className="text-2xl text-center mt-6">Register</h1>
      <div className="card-body max-w-[400px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Invitation Code</span>
            </label>
            <input
              type="text"
              placeholder="Please Enter 6~8 digits invitation code"
              className="input input-bordered"
              {...register("userName", {
                required: true,
                maxLength: 8,
                minLength: 6,
              })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Please Enter 6~12 letters or numbers"
              className="input input-bordered"
              {...register("userName", {
                required: true,
                maxLength: 12,
                minLength: 6,
              })}
            />
            {errors.userName && <p>User name is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Login password</span>
            </label>
            <input
              type="password"
              placeholder="6~12 digits with english letters and numbers"
              className="input input-bordered"
              {...register("password", {
                required: true,
                maxLength: 12,
                minLength: 6,
              })}
            />
            {errors.password && <p>Password is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Please re-enter password"
              className="input input-bordered"
              {...register("confirmPassword", {
                required: true,
                maxLength: 12,
                minLength: 6,
              })}
            />
            {errors.confirmPassword && <p>Confirmation is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Real name</span>
            </label>
            <input
              type="text"
              placeholder="Please enter real name"
              className="input input-bordered"
              {...register("name", {
                required: true,
              })}
            />
            {errors.name && <p>Name is required</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone number</span>
            </label>
            <div className="flex justify-between">
              <select
                className="select select-bordered select-md w-24 max-w-xs"
                {...register("gender")}
              >
                <option selected value="+880">
                  +880
                </option>
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </select>
              <input
                type="number"
                placeholder="Please enter phone number"
                className="input input-bordered w-56"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
