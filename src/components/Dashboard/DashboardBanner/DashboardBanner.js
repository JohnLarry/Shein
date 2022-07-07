import React from "react";
import profilePic from "../../../images/profile.jpg";
import { MdOutlineRotateLeft } from "react-icons/md";

const DashboardBanner = () => {
  return (
    <div className="container mx-auto max-w-[1080px] p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5">
        <h1 className="text-xl font-bold text-center">Task Lobby</h1>
      </div>

      <div>
        <div className=" pt-5  max-w-[500px] mx-auto">
          <div className="card items-center lg:card-side bg-neutral  text-white  shadow-xl p-10">
            <div className="avatar">
              <div className=" w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profilePic} alt="ProfilePic" />
              </div>
            </div>
            <div className=" card-body flex items-center justify-center py-10 ">
              <div>
                <h2 className="card-title  md:text-4xl lg:text-5xl text-3xl">
                  <strong>test12</strong>
                </h2>
                <div className="flex items-center gap-2 py-5">
                  <h5 className="md:text-base lg:text-base ">
                    Total assests: 0{" "}
                  </h5>
                  <span>
                    <MdOutlineRotateLeft></MdOutlineRotateLeft>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="my-16 flex items-center justify-center">
          <div className="text-white bg-neutral stats stats-vertical lg:stats-horizontal shadow-lg">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Grabbed/ Total:</div>
              <div className="stat-value text-primary"> 0/50</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Promotion bonus: </div>
              <div className="stat-value text-secondary">0</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Today's profit: </div>
              <div className="stat-value">0</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardBanner;
