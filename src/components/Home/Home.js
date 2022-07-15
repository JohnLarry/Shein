import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/8666358.svg";
import smallLogo from "../../images/fd8ca81.png";
// images
import deposit from "../../images/c09a915.svg";
import withdraw from "../../images/5dfa582.svg";
import aboutUs from "../../images/e2c4587.svg";
import rules from "../../images/30da4dc.svg";
import promotion from "../../images/152d578.svg";
import vip from "../../images/101f845.svg";
import event from "../../images/567f27f.svg";
import inviteFriends from "../../images/8da3f99.svg";
import taskImg from "../../images/task1.jpg";
import Navber from "../Navber/Navber";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authkey } from "../Login/authkey";

import { updateSummary } from "../../store/slice";
import { updateUser } from "../../store/slice";
import { primary } from "daisyui/src/colors";
import { updateDashboardMessage } from "../../store/slice";
import teamReport from "../../images/eb36604.svg";
const Home = () => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const format = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };
  const dispatch = useDispatch();
  var dashboard = new FormData();

  var arrayData = [];
  const navigate = useNavigate();
  dashboard.append("dashboard", "");
  dashboard.append("auth", authkey);
  dashboard.append("logged", localStorage.getItem("auth"));

  const [dashboardData, setDashBoardData] = useState({});
  const [dashboardDataPack, setDashBoardDataPack] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [returnedData, setReturnedData] = useState(0);
  const [lockFundModal, setLockFundModal] = useState(false);
  const [lockFundSuccess, setLockFundSuccess] = useState(false);
  const [lockFundError, setLockFundError] = useState(false);
  const [fundLockAmount, setFundLockAmount] = useState(0);
  const [responseMessage, setResponseMessage] = useState("");
  var lock = new FormData();
  lock.append("lock", "");
  lock.append("amount", fundLockAmount);
  lock.append("auth", authkey);
  lock.append("logged", localStorage.getItem("auth"));

  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboard,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateSummary(data.message.pack));
          dispatch(updateUser(data.message.user));
          dispatch(updateDashboardMessage(data.message));

          setDashBoardData(data.message);
          setDashBoardDataPack(data.message.pack);
        } else {
          navigate("/login");
        }
      });
  }, []);

  setTimeout(() => {
    var bodydata = new FormData();
    bodydata.append("data", JSON.stringify(arrayData));

    fetch("https://mining-nfts.com/api/getTopNumber.php", {
      method: "POST",
      body: bodydata, // ["1", "2", "3"]
    })
      .then((res) => res.json())
      .then((data) => {
        setReturnedData(data);
        localStorage.setItem("claimProfit", returnedData);
      });
  }, 1000);
  const gotoGrabTask = (grab_id) => {
    navigate("/order-grab?data=" + { grab_id });
  };
  const addLockFund = () => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: lock,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          setLockFundModal(false);
          setResponseMessage(data.message);
          setLockFundSuccess(true);
        }
        if (data.status == 100) {
          setLockFundModal(false);
          setResponseMessage(data.message);
          setLockFundError(true);
        }
      });
  };
  const showLockFundModal = () => {
    setLockFundModal(true);
  };
  const closeFundModal = () => {
    setLockFundModal(false);
  };
  const closeFundErrorModal = () => {
    setLockFundError(false);
  };
  const closeFundSuccessModal = () => {
    setLockFundSuccess(false);
  };
  const updateFundLock = (e) => {
    e.preventDefault();
    setFundLockAmount(e.target.value);
  };
  const dashboardMessage = useSelector(
    (state) => state.dashboardmessage.message
  );

  return (
    <>
      <div className="container max-w-[1080px] mx-auto p-5 relative">
        <div className="flex justify-center">
          <img src={Logo} alt="" />
        </div>
        <div className="card mx-auto bg-base-200 shadow-xl w-full">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h1>Home</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 my-5">
          <img className="w-14" src={smallLogo} alt="" />
          <h1>
            Welcome back,{" "}
            {Object.entries(dashboardMessage).length > 0
              ? dashboardMessage.user[0].username
              : "user"}
          </h1>
        </div>
        <div className="card mx-auto bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <div className="flex justify-between">
              <h1>Total Asset</h1>
              <h1>{format(dashboardMessage.asset)}</h1>
            </div>

            <div className="flex justify-between">
              <div className="flex ">
                <h1>Locked asset</h1>
                <button
                  className="ml-2 p-1 rounded-sm bg-green-600 text-white"
                  onClick={showLockFundModal}
                >
                  Add Fund
                </button>
              </div>
              <h1>{format(dashboardMessage.locked_asset)}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Today's profits</h1>
              <h1>{format(dashboardMessage.today_profit)}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Promotion bonus</h1>
              <h1>{format(dashboardMessage.promotion_bonus)}</h1>
            </div>
            <div className="flex justify-between">
              <h1>Accumulated profits</h1>
              <h1>{format(dashboardMessage.total)}</h1>
            </div>
          </div>
        </div>
        <div>
          {lockFundModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeFundModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A459F"
                        fill="#FFFFFF"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </div>

                    <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black h-80">
                      <p className="font-bold text-center text-2xl text-wrap text-green-600">
                        Add fund
                      </p>

                      <input
                        type="text"
                        placeholder="Amount"
                        onChange={updateFundLock}
                      />

                      <button
                        className="btn-primary mt-2 py-2 rounded-lg"
                        onClick={() => {
                          addLockFund();
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          {lockFundSuccess ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeFundSuccessModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A459F"
                        fill="#FFFFFF"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </div>

                    <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black h-80">
                      <p className="font-bold text-center text-2xl text-wrap text-green-600">
                        Fund added successfully
                      </p>
                      <div className="flex justify-center ">
                        <button
                          className="btn-primary mt-2 py-2 rounded-lg"
                          onClick={() => {
                            closeFundSuccessModal();
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          {lockFundError ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeFundErrorModal();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#0A459F"
                        fill="#FFFFFF"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="1em"
                        width="1em"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      </svg>
                    </div>

                    <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black h-80">
                      <p className="font-bold text-center text-2xl text-wrap text-red-600">
                        {responseMessage}
                      </p>
                      <div className="flex justify-center ">
                        <button
                          className="btn-primary mt-2 py-2 rounded-lg"
                          onClick={() => {
                            closeFundErrorModal();
                          }}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div className="grid grid-cols-2 gap-5 my-10">
          <Link to="/deposit" className="flex flex-col items-center">
            <img src={deposit} alt="" />
            <h1>Deposit</h1>
          </Link>
          <Link to="/withdraw" className="flex flex-col items-center">
            <img src={withdraw} alt="" />
            <h1>Withdraw</h1>
          </Link>
          <Link to="/invite-friends" className="flex flex-col items-center">
            <img src={inviteFriends} alt="" />
            <h1>Invite friends</h1>
          </Link>
          <Link to="/team-report/agent" className="flex flex-col items-center">
            <img src={teamReport} alt="" />
            <h1>Team report</h1>
          </Link>
          <Link to="/about" className="flex flex-col items-center">
            <img src={aboutUs} alt="" />
            <h1>About us</h1>
          </Link>
          <Link to="/rule-description" className="flex flex-col items-center">
            <img src={rules} alt="" />
            <h1>Rules description</h1>
          </Link>
          <Link to="/promo" className="flex flex-col items-center">
            <img src={promotion} alt="" />
            <h1>Promotion description</h1>
          </Link>
          <Link to="/current-level" className="flex flex-col items-center">
            <img src={vip} alt="" />
            <h1>VIP</h1>
          </Link>
        </div>
        <div>
          <div className="my-8">
            <h1 className="text-center text-xl">Task Lobby</h1>
            <h4 className="text-center text-xm text-green-500">
              Today est. profit {""}
              {returnedData} USD
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {dashboardDataPack.map((task) => (
              <div
                key={task.id}
                className="card mx-auto bg-base-200 shadow-xl w-full p-5 relative"
              >
                <input
                  type="hidden"
                  value={
                    dashboardData.user[0][
                      task.packName.toLowerCase() + "_orders"
                    ] === null
                      ? ""
                      : arrayData.push(
                          (dashboardData.user[0]["main_balance"] / 100) *
                            task.commission_percent
                        )
                  }
                />

                <div>
                  <img src={task.image} className="rounded-lg" alt="" />
                  <h1>{task.marketName}</h1>
                  <p>Percent: {task.commission_percent / 10}%</p>
                  <p>Order Amount: {task.grab_order}</p>
                </div>
                <div className="flex justify-between">
                  {dashboardData.user[0][
                    task.packName.toLowerCase() + "_orders"
                  ] != task.grab_order ? (
                    dashboardData.user[0].ableToWork === "1" ? (
                      <button
                        disabled={
                          dashboardData.user[0][
                            task.packName.toLowerCase() + "_orders"
                          ] === null
                            ? true
                            : false
                        }
                        className={`btn  w-1/2 ${
                          dashboardData.user[0].ableToWork === "1"
                            ? "bg-success"
                            : "bg-primary"
                        }`}
                        onClick={() => {
                          navigate(`/order-grab/${task.id}`);
                        }}
                      >
                        {dashboardData.user[0][
                          task.packName.toLowerCase() + "_orders"
                        ] == null
                          ? "Locked"
                          : dashboardData.user[0][
                              task.packName.toLowerCase() + "_orders"
                            ] != task.grab_order
                          ? dashboardData.user[0].ableToWork === "1"
                            ? "grab now"
                            : "grab tomorrow "
                          : "Grab  tomorrow "}
                      </button>
                    ) : (
                      <button
                        className={`btn  w-1/2 bg-primary`}
                        disabled={
                          dashboardData.user[0][
                            task.packName.toLowerCase() + "_orders"
                          ] == null
                            ? true
                            : dashboardData.user[0][
                                task.packName.toLowerCase() + "_orders"
                              ] != task.grab_order
                            ? dashboardData.user[0].ableToWork === "1"
                              ? false
                              : false
                            : false
                        }
                      >
                        {dashboardData.user[0][
                          task.packName.toLowerCase() + "_orders"
                        ] == null
                          ? "Locked"
                          : dashboardData.user[0][
                              task.packName.toLowerCase() + "_orders"
                            ] != task.grab_order
                          ? dashboardData.user[0].ableToWork === "1"
                            ? "Grab Tomorrow"
                            : "grab tomorrow "
                          : "Grab  tomorrow "}
                      </button>
                    )
                  ) : (
                    <button className={`btn  w-1/2 bg-primary`}>
                      <span>grab tomorrow</span>
                    </button>
                  )}

                  <span className=" bg-primary px-3 rounded-lg pt-3 text-white ">
                    {task.packName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 99,
        }}
        className="mt-5"
      >
        <Navber></Navber>
      </div>
    </>
  );
};

export default Home;
