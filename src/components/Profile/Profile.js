import React from "react";
import avater from "../../images/avater.png";
import { MdEmail } from "react-icons/md";
import { AiOutlineClear } from "react-icons/ai";
import { AiOutlineSound } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

// images
import info from "../../images/68d5e54.svg";
import deposit from "../../images/fae87e4.svg";
import withdraw from "../../images/a723444.svg";
import history from "../../images/2084950.svg";
import account from "../../images/88ac34a.svg";
import vip from "../../images/cc6e80b.svg";
import transection from "../../images/4a9ab9a.svg";
import withdrawSettings from "../../images/2e40a11.svg";
import teamReport from "../../images/eb36604.svg";
import message from "../../images/81f967c.svg";
import event from "../../images/a625b93.svg";
import downloadApp from "../../images/8e1d461.svg";
import inviteFriends from "../../images/04c663c.svg";
import Navber from "../Navber/Navber";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="container max-w-[1080px] mx-auto">
        <div className="w-full h-[350px] bg-primary relative rounded-b-[50%]">
          <div className="w-[90%] mx-auto flex justify-between items-center pt-12 text-white">
            <div className="flex gap-5 mb-5">
              <div className="avatar">
                <div className="w-12 rounded-full ring ring-secondary ring-offset-white ring-offset-2">
                  <img src={avater} alt="" />
                </div>
              </div>
              <div>
                <h2 className="card-title">User name</h2>
                <p>Invitation Code: 56437884</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MdEmail className="w-6 h-6"></MdEmail>
              <AiOutlineClear className="w-6 h-6"></AiOutlineClear>
            </div>
          </div>
          <div className="bg-white w-[90%] mx-auto absolute bottom-0 left-[5%] h-56 rounded-lg">
            <div className="flex flex-col items-center justify-center h-full">
              <h1 className="text-3xl font-bold mb-3 text-base-200">
                Account Balance
              </h1>
              <h1 className="text-5xl font-bold text-base-200">0</h1>
            </div>
          </div>
        </div>

        <div className="w-[90%] mx-auto bg-base-200 mt-5 p-5 rounded-lg flex justify-between">
          <div className="flex gap-5 items-center">
            <AiOutlineSound></AiOutlineSound>
            <h1>SHEIN OFFICIAL CHANNEL</h1>
          </div>
          <AiOutlineArrowRight></AiOutlineArrowRight>
        </div>
        <div className="w-[90%] mx-auto bg-base-200 m-5 p-5 grid grid-cols-2 md:grid-cols-5 gap-5 rounded-lg">
          <Link to="/personal-info" className="flex flex-col items-center">
            <img src={info} alt="" />
            <h1>Personal info</h1>
          </Link>
          <Link to="/deposit" className="flex flex-col items-center">
            <img src={deposit} alt="" />
            <h1>Deposit</h1>
          </Link>
          <Link to="/withdraw" className="flex flex-col items-center">
            <img src={withdraw} alt="" />
            <h1>Withdraw</h1>
          </Link>
          <Link to="/order-history" className="flex flex-col items-center">
            <img src={history} alt="" />
            <h1>Order history</h1>
          </Link>
          <Link to="/account-details" className="flex flex-col items-center">
            <img src={account} alt="" />
            <h1>Account details</h1>
          </Link>
          <Link to="/vip/current-level" className="flex flex-col items-center">
            <img src={vip} alt="" />
            <h1>VIP</h1>
          </Link>
          <Link to="/withdrawal-history" className="flex flex-col items-center">
            <img src={transection} alt="" />
            <h1>Transaction</h1>
          </Link>
          <Link
            to="/withdrawal-settings"
            className="flex flex-col items-center"
          >
            <img src={withdrawSettings} alt="" />
            <h1>Withdrawal settings</h1>
          </Link>
          <Link to="/team-report/agent" className="flex flex-col items-center">
            <img src={teamReport} alt="" />
            <h1>Team report</h1>
          </Link>
          <Link to="/message" className="flex flex-col items-center">
            <img src={message} alt="" />
            <h1>Message</h1>
          </Link>
          <Link to="/event" className="flex flex-col items-center">
            <img src={event} alt="" />
            <h1>Event</h1>
          </Link>
          <Link to="/download-app" className="flex flex-col items-center">
            <img src={downloadApp} alt="" />
            <h1>Download APP</h1>
          </Link>
          <Link to="/invite-friends" className="flex flex-col items-center">
            <img src={inviteFriends} alt="" />
            <h1>Invite friends</h1>
          </Link>
          <Link to="/lock-history" className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            <h1>Lock history</h1>
          </Link>
        </div>
      </div>
      <Navber></Navber>
    </>
  );
};

export default Profile;
