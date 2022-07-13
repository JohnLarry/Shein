import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { Link, useNavigate } from "react-router-dom";
import { authkey } from "../Login/authkey";

import "./Deposit.css";

const Deposit = () => {
  const [deposits, setDeposits] = useState();
  const navigate = useNavigate();
  const Completionist = () => <span>Your time ended!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  var deposit = new FormData();
  deposit.append("auth", authkey);
  deposit.append("logged", localStorage.getItem("auth"));
  deposit.append("deposit", "");
  deposit.append("create", "");
  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: deposit,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.status == 200) {
          console.log(data);
          setDeposits(data);
        } else {
          navigate("/login");
        }
      });
  }, []);

  return (
    <div className="container max-w-[1080px] mx-auto pb-10 ">
      <Link to="/profile" className="btn btn-base-200 m-5">
        Back
      </Link>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-base md:text-xl  lg:text-2xl font-bold">
              Tether Payment!
            </h2>
            <h3 className="font-bold">
              <p>
                Minimum Amount: <span>{deposits?.message?.min_amount}</span>
              </p>
              <span className="text-red-600">
                {" "}
                {deposits?.message?.currency}
              </span>
            </h3>
            <h4 className="font-bold">
              <span>{deposits?.message?.network}</span>
              <span className="text-red-600">
                {" "}
                <sup>$</sup>
              </span>{" "}
            </h4>
            <div className="flex ">
              <h5 className=" font-bold text-green-700 text-sm md:text-base lg:text-xl">
                Wallet Address :{" "}
                <span className="fontRestyleItalic">
                  {deposits?.message?.address}
                </span>{" "}
              </h5>
              <h5 className=" font-bold text-gray-400 text-base md:text-xl lg:text-xl ml-3 bg-slate-200 p-2 rounded-3xl">
                {" "}
                <i className="fa-solid fa-copy"></i>
              </h5>
            </div>

            <div>
              <h2 className="font-bold text-base md:text-xl  lg:text-xl">
                <i className="fa-solid fa-clock"></i> Time left to pay :{" "}
                <span className="text-sky-600">
                  {" "}
                  <Countdown date={Date.now() + 3600000} renderer={renderer} />
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <div className="m-3">
        <div className="card w-100 bg-base-200 text-black shadow-xl">
          <div className="card-body">
            <h2 className=" card-title  text-xl md:text-xl  lg:text-2xl font-bold">
              Instructions & Notices!
            </h2>
            <p className="text-slate-800">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
              necessitatibus dolor molestiae a accusamus, consequuntur culpa aut
              inventore, eaque quasi perferendis ipsam natus, laudantium
              temporibus commodi doloremque est sed quaerat? Recusandae facere
              tenetur quas beatae! Expedita alias praesentium doloremque
              similique quasi deleniti aliquid mollitia. Ipsam nobis nihil
              eveniet blanditiis hic porro suscipit et quod necessitatibus
              provident? Eaque, qui ex alias nobis dolores eveniet veniam
              voluptatem sint ducimus ea repellat quis, accusamus sed minima
              beatae dolor nihil illo iste. Eos aliquam quidem, tenetur deserunt
              placeat ducimus architecto, iste ut nam, dolore atque quo. Natus
              vitae illum repellat perferendis vero pariatur recusandae?
            </p>
          </div>
        </div>
      </div>

      <section></section>
      <section></section>
    </div>
  );
};

export default Deposit;
