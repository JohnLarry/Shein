import React from "react";
import avater from "../../images/avater.png";

const PersonalInfo = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5">
        <h1 className="text-xl font-bold text-center">Personal Info</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="card mx-auto bg-base-200 shadow-xl w-full">
          <div class="card-body">
            <div className="flex gap-5 mb-5">
              <div class="avatar">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={avater} alt="" />
                </div>
              </div>
              <div>
                <h2 class="card-title">User name</h2>
                <p>total assets 0.00</p>
              </div>
            </div>

            <div className="flex justify-between">
              <h1>Real Name</h1>
              <h1>wet etr</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Gender</h1>
              <h1>not set</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Date of Birth</h1>
              <h1>not set</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Phone Number</h1>
              <h1>+880 18*****295</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Email</h1>
              <h1>not set</h1>
            </div>
            <hr />
            <p className="text-error mt-5">
              The info above cannot be changed once submitted. Should you have
              any further questions, please contact customer service.
            </p>
          </div>
        </div>
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body">
            <h1 className="card-title">Set Password</h1>
            <div className="flex justify-between">
              <h1>Change Login Password</h1>
              <h1>not set</h1>
            </div>
            <hr />
            <div className="flex justify-between">
              <h1>Change Withdrawal Password</h1>
              <h1>not set</h1>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
