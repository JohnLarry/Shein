import React, { useState, useEffect } from "react";
import "./OrderGrab.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authkey } from "../Login/authkey";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { updateSummary } from "../../store/slice";
import { updateUser } from "../../store/slice";
const OrderGrab = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  var profit = localStorage.getItem("claimProfit");
  var arrayData = [];
  const navigate = useNavigate();

  const [status, setStatus] = useState("");
  const [showOrderCompletedTodayModal, setShowOrderCompletedTodayModal] =
    useState(false);
  const [showOrderClaimModal, setShowOrderClaimModal] = useState(false);
  const [showOrderErrorModal, setShowOrderErrorModal] = useState(false);
  const [showOrderPageModal, setShowOrderPageModal] = useState(false);
  const [grabProducts, setGrabProducts] = useState({});
  const [showClaimSuccessModal, setShowClaimSuccessModal] = useState(false);
  const [showClaimFailedModal, setShowClaimFailedyModal] = useState(false);
  const [assetStats, setAssetStats] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  var pack_level = id;
  var grab = new FormData();
  var grabSubmitAll = new FormData();
  grabSubmitAll.append("submit_product", "");
  grabSubmitAll.append("auth", authkey);
  grabSubmitAll.append("logged", localStorage.getItem("auth"));

  var grabStats = new FormData();
  grabStats.append("grabSts", "");
  grabStats.append("auth", authkey);
  grabStats.append("logged", localStorage.getItem("auth"));
  grab.append("pack_level", pack_level);
  grab.append("grab", "");
  grab.append("auth", authkey);
  grab.append("logged", localStorage.getItem("auth"));
  const grabOrder = () => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: grab,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200 && data.message.left_order == 0) {
          setGrabProducts(data.message);
          setShowOrderClaimModal(true);

          setStatus("200");
        }
        if (data.status == 200 && data.message.left_order > 0) {
          console.log("Show order page");
          setGrabProducts(data.message);
          console.log(data.message);
          setShowOrderPageModal(true);
          closeModal();

          setStatus("200");
          console.log(data);
        }
        if (data.status == 201 && data.message.left_order > 0) {
          setShowOrderCompletedTodayModal(true);
          closeModal();
          setStatus("201");
          console.log("Order is completed for today");
          console.log(data);
        }
        if (data.status == 201 && data.message.left_order == 0) {
          setGrabProducts(data.message);
          setShowOrderClaimModal(true);

          setStatus("200");
        }
        if (data.status == 100) {
          setShowOrderErrorModal(true);
          closeModal();
          setStatus("100");
          console.log("Error occured invalid pack id");
        }
      });
  };
  const grabOrderStats = () => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: grabStats,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          setAssetStats(data.message);
        }

        if (data.status == 201) {
          console.log(data);
          setAssetStats(data.message);
        }
        if (data.status == 100) {
          console.log("Error occured invalid pack id");
        }
      });
  };

  const closeModal = () => {
    setTimeout(() => {
      setShowOrderCompletedTodayModal(false);
      setShowOrderErrorModal(false);
      setShowOrderPageModal(false);
      setShowClaimFailedyModal(false);
      setShowClaimSuccessModal(false);
      grabOrderStats();
      setStatus("");
    }, 60000);
  };
  const closeOrderPageModal = () => {
    grabOrderStats();
    setShowOrderPageModal(false);
    setStatus("");
  };
  const closeErrorModal = () => {
    setShowOrderErrorModal(false);
    setStatus("");
  };
  const closeCompletedTodayModal = () => {
    setShowOrderCompletedTodayModal(false);
    setStatus("");
  };
  const closeOrderClaimModal = () => {
    setShowOrderClaimModal(false);
    setStatus("");
  };
  const Claim = () => {
    setIsLoading(true);
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: grabSubmitAll,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          console.log("Show order page");
          setGrabProducts(data.message);
          setShowOrderClaimModal(false);
          setShowClaimSuccessModal(true);
        }
        if (data.status == 100) {
          setShowOrderClaimModal(false);
          setShowClaimFailedyModal(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };
  const closeClaimSuccessModal = () => {
    setShowClaimSuccessModal(false);
    setStatus("");
  };
  const closeClaimFailedModal = () => {
    setShowClaimFailedyModal(false);
    setStatus("");
  };

  var dashboard = new FormData();
  dashboard.append("dashboard", "");
  dashboard.append("auth", authkey);
  dashboard.append("logged", localStorage.getItem("auth"));

  const [dashboardData, setDashBoardData] = useState({});
  const [dashboardDataPack, setDashBoardDataPack] = useState([]);
  const [totalProfit, setTotalProfit] = useState(0);
  const [returnedData, setReturnedData] = useState(0);
  useEffect(() => {
    grabOrderStats();
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboard,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateSummary(data.message.pack));
          dispatch(updateUser(data.message.user));
          setDashBoardData(data.message);
          setDashBoardDataPack(data.message.pack);
        } else {
          navigate("/login");
        }
      });
  }, []);
  const user = useSelector((state) => state.user.data);
  return (
    <div>
      <div className="  ">
        <header className=" bg-gray-900 navbar    max-w-[1080] mx-auto py-4">
          <div className="wrapper ">
            <div className="flex-1  ">
              <button className=" btn btn-square btn-ghost text-3xl lg:pl-5 md:pl-5  pl-1 font-bold">
                <a className="text-white" href="b">
                  <i className="fa-solid fa-circle-arrow-left"></i>
                </a>
              </button>
            </div>

            <div className="flex-none">
              <h1
                href
                className="lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-white"
              >
                Order-Grab Rules
              </h1>
            </div>
          </div>
        </header>

        <div className="bg-slate-800 content-area py-5 ">
          <div className="container mx-auto max-w-[1080] lg:px-5 md:px-5 px-4  ">
            <section className="my-7  py-3 rounded-xl ">
              <div className="card lg:card-side  shadow-xl bg-slate-300 ">
                <figure>
                  <img
                    className="w-5/6 my-5 shadow-xl  rounded-lg"
                    src="https://mediakonsumen.com/files/2020/10/putus-mitra-gra_b.jpg"
                    alt="Album"
                  />
                </figure>
                <div className="card-body flex justify-center ">
                  <div>
                    <h2 className="card-title text-4xl mb-2  font-bold">
                      Get the order!
                    </h2>
                    <div>
                      <p className=" mb-5">
                        Click "Grab now" button to get the order.
                      </p>
                      <p className=" text-emerald-800 mb-7">
                        Order grabbing... the result will be shown below
                      </p>
                    </div>
                  </div>
                  <div className="card-actions justify-end w-full">
                    <button
                      className="btn text-white w-full font-bold bg-gray-900"
                      onClick={grabOrder}
                      disabled={
                        user[0].ableToWork == "1"
                          ? false
                          : user[0].ableToWork == "0"
                          ? true
                          : false
                      }
                    >
                      Grab Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="my-7  py-3 rounded-xl">
              <div>
                <h2 className="text-center text-xl md:text-3xl lg:text-4xl mb-6 mt-9 bg-gray-900  text-white rounded-lg shadow-xl py-5 font-bold">
                  Result Today
                </h2>
              </div>

              <div className="card lg:card-side  shadow-xl bg-slate-300">
                <div className="stats w-11/12 mx-auto lg:mx-5 md:mx-5 lg:w-5/12 md:w-5/12 my-5 shadow-xl  rounded-lg">
                  <div className="stat overflow-x-hidden">
                    <div className="stat-title lg:text-base md:text-base text-sm">
                      Total assests Views
                    </div>
                    <div className="stat-value lg:text-4xl md:text-3xl text-2xl">
                      {assetStats.total_asset_view}
                    </div>
                    <div className="stat-desc">21% more than last month</div>
                  </div>
                </div>

                <div className="lg:w-7/12 md:w-7/12 w-full card-body flex justify-center  px-3  ">
                  <div className=" stats stats-vertical lg:stats-horizontal shadow-xl rounded-lg">
                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Grabbed/ Total</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl ">
                        {assetStats.left_order}/{assetStats.total_order}
                      </div>
                      <div className="stat-desc">Today</div>
                    </div>

                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Promotion bonus</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl">
                        {assetStats.today_bonus}
                      </div>
                      <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat px-3 md:px-2 lg:px-5">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block w-8 h-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Profits today</div>
                      <div className="stat-value  lg:text-4xl md:text-3xl text-xl">
                        <sup>$</sup>
                        {assetStats.today_profit}
                      </div>
                      <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <>
        <div className="bg-[#3F4D67]">
          {showOrderCompletedTodayModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeCompletedTodayModal();
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

                    <>
                      <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                        <p className="font-bold text-center text-2xl text-wrap">
                          Your order is completed for today
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          {showOrderClaimModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeOrderClaimModal();
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

                    {status === "success" ? (
                      <div className="p-4">
                        <div className="flex justify-center mt-2">
                          <img src={"/checked.svg"} alt="Checked.svg" />
                        </div>
                        <div>
                          <p className="text-black font-bold text-center"></p>
                        </div>
                        <div className="flex justify-center mt-6">
                          {" "}
                          <button
                            className="bg-green-500 rounded text-white capitalized  font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                          >
                            Ok
                          </button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                          <p className="font-bold text-center text-2xl text-wrap"></p>

                          <p>Claim amount: {profit} USD</p>

                          <button
                            className="btn-primary rounded-lg mt-4 py-2"
                            onClick={() => {
                              Claim();
                            }}
                          >
                            {isLoading ? (
                              <div class="text-center">
                                <svg
                                  role="status"
                                  class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                  viewBox="0 0 100 101"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor"
                                  />
                                  <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <span>Claim</span>
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          {showOrderPageModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}

                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeOrderPageModal();
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

                    <>
                      <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                        <p className="font-bold text-center text-2xl text-wrap text-green-600">
                          Order sent successfully
                        </p>
                        <p> Order left : {grabProducts.left_order}</p>

                        <p className="text-indigo-600">
                          {" "}
                          {grabProducts.product.title}
                        </p>
                        <img src={grabProducts.product.image} />
                        <button
                          className="btn-primary mt-2 py-2 rounded-lg"
                          onClick={() => {
                            closeOrderPageModal();
                          }}
                        >
                          Done
                        </button>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        <div>
          {showOrderErrorModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}
                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeErrorModal();
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

                    <>
                      <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                        <p className="font-bold text-center text-sm text-red-600 text-wrap">
                          Error occured try again later!
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>

        <div>
          {showClaimSuccessModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}
                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeClaimSuccessModal();
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

                    <>
                      <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                        <p className="font-bold text-center text-sm text-green-600 text-wrap">
                          Your Claimed product successfully
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>

        <div>
          {showClaimFailedModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}
                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    <div
                      className="flex justify-end bg-[#CBD5E1]"
                      onClick={() => {
                        closeClaimFailedModal();
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

                    <>
                      <div className="flex flex-col justify-between p-5   rounded-t bg-slate-300 bg-white-300 text-black">
                        <p className="font-bold text-center text-sm text-red-600 text-wrap">
                          Error occured try again later!
                        </p>
                      </div>
                    </>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </>
    </div>
  );
};

export default OrderGrab;
