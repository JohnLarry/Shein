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
              <div class="avatar">
                <div class="w-12 rounded-full ring ring-secondary ring-offset-white ring-offset-2">
                  <img src={avater} alt="" />
                </div>
              </div>
              <div>
                <h2 class="card-title">User name</h2>
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
          <Link to="/transaction" className="flex flex-col items-center">
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
          <Link to="/team-report" className="flex flex-col items-center">
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
        </div>
      </div>
      <Navber></Navber>
    </>
  );
};

export default Profile;
