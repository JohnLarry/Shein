import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../images/8666358.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const login = {
      username: data.username,
      password: data.password,
    };
    console.log(login);

    await fetch("https://mining-nfts.com/api/", {
      mode: "no-cors",
      method: "POST",
      headers: {
        "content-type": "application/json",
        "access-control-allow-headers": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(login),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    reset();
  };

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="flex flex-col items-center mt-28">
        <img src={logo} alt="" />
        <h1 className="text-2xl font-bold text-white">SHEIN ASSISTANT</h1>
      </div>
      <div class="card-body max-w-[400px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Please Enter 6~12 letters or numbers"
              class="input input-bordered"
              {...register("username", {
                required: true,
                maxLength: 12,
                minLength: 6,
              })}
            />
            {errors.userName && <p>User name is required</p>}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Please enter the password"
              class="input input-bordered"
              {...register("password", { required: true, maxLength: 8 })}
            />
            {errors.password && <p>Password is required</p>}
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Verification Code</span>
            </label>
            <input
              type="text"
              placeholder="Please enter verification code"
              class="input input-bordered"
              {...register("verification")}
            />
          </div>
          <div class="form-control mt-6">
            <input class="btn btn-primary" type="submit" value="Login Now" />
          </div>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="text-primary">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
