import React, { useEffect, useState } from "react";
import avater from "../../images/avater.png";
import { useSelector } from "react-redux";
import { TbEdit } from "react-icons/tb";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { authkey } from "../Login/authkey";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  const user = useSelector((state) => state.user.data);
  const [verify, setVerify] = useState();
  const navigate = useNavigate();

  const handleVerify = () => {
    var verifyCode = new FormData();
    verifyCode.append("auth", authkey);
    verifyCode.append("logged", localStorage.getItem("auth"));
    verifyCode.append("send_otp", "");

    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: verifyCode,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status == 200) {
          console.log(data);
          setVerify(data);
        } else {
          console.log(data);
        }
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const verifyMessage = data.verification;
    console.log(verifyMessage);
    if (verifyMessage == verify?.message?.code) {
      navigate("/change-password");
    } else {
      console.log("Dont Match");
    }
  };

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Personal Info</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card mx-auto bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <div className="flex gap-5 mb-5">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={avater} alt="" />
                </div>
              </div>
              <div>
                <h2 className="card-title">{user[0].username}</h2>
                <p>total assets: {user[0].main_balance}</p>
              </div>
            </div>

            <div className="flex justify-between">
              <h1>Real name</h1>
              <h1>{user[0].name}</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Date of Birth</h1>
              <h1>{user[0].dateofbirth}</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Phone Number</h1>
              <h1>{user[0].phone}</h1>
            </div>

            <hr />
            <p className="text-error mt-5">
              The info above cannot be changed once submitted. Should you have
              any further questions, please contact customer service.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h1 className="card-title">Set Password</h1>
            <div className="flex justify-between">
              <h1>Change Login Password</h1>
              <label
                htmlFor="my-modal-3"
                className="btn modal-button btn-ghost"
              >
                <TbEdit className="text-2xl text-error "></TbEdit>
              </label>

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal p-5">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h1 className="text-2xl">
                    You will be charged 0.10$ for the SMS
                  </h1>
                  <p className="mt-10">Do you want to proceed?</p>
                  <div className="flex gap-5 mt-5">
                    <label htmlFor="my-modal-3" className="btn btn-error">
                      NO
                    </label>
                    <label
                      onClick={handleVerify}
                      for="my-modal-4"
                      className="btn btn-primary"
                    >
                      YES
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <label for="my-modal-4" class="modal cursor-pointer">
              <label class="modal-box relative" for="">
                <h3 class="text-2xl text-center font-bold mb-5">
                  Verification Code
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <input
                      type="number"
                      className="input input-bordered"
                      {...register("verification", {
                        required: true,
                      })}
                    />
                    {errors.verification && <p>Password is required</p>}
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary"
                      type="submit"
                      value="Verify"
                    />
                  </div>
                </form>
              </label>
            </label>

            <div className="flex justify-between">
              <h1>Change Withdrawal Password</h1>
              <label
                htmlFor="my-modal-3"
                className="btn modal-button btn-ghost"
              >
                <TbEdit className="text-2xl text-error "></TbEdit>
              </label>

              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal p-5">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <form action="">
                    <div className="form-control">
                      <input
                        type="password"
                        placeholder="change password"
                        className="input input-bordered input-secondary"
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
