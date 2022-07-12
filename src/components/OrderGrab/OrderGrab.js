import React, { useState } from "react";
import "./OrderGrab.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { authkey } from "../Login/authkey";
const OrderGrab = () => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const [showOrderCompletedTodayModal, setShowOrderCompletedTodayModal] =
    useState(true);
  const [showOrderErrorModal, setShowOrderErrorModal] = useState(false);
  const [showOrderPageModal, setShowOrderPageModal] = useState(false);
  const user = useSelector((state) => state.user.data);
  var pack_level = 1;
  var grab = new FormData();
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
        if (data.status == 200) {
          console.log("Show order page");
          setStatus("200");
          console.log(data);
        }
        if (data.status == 201) {
          setStatus("201");
          console.log("Order is completed for today");
          console.log(data);
        }
        if (data.status == 100) {
          setStatus("100");
          console.log("Error occured invalid pack id");
        }
      });
  };

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
                      89,400
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
                        0/50
                      </div>
                      <div className="stat-desc">Jan 1st - Feb 1st</div>
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
                        4,200
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
                        <sup>$</sup>1,200
                      </div>
                      <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-actions justify-end w-full my-7">
                <button className="btn text-white w-full font-bold bg-gray-900">
                  Order-Grab Rules
                </button>
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
                    {status ? (
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
                          <p className="font-bold text-center text-2xl text-wrap">
                            Show order completed for today
                          </p>
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
                    {status && (
                      <div className="flex justify-center text-orange-500">
                        <p className=" ">An error occured, try again.</p>
                      </div>
                    )}

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
                          <p className="font-bold text-center text-2xl text-wrap">
                            Check if your SIM has been activated
                          </p>
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
          {showOrderErrorModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
                <div className="relative  my-6 mx-auto ">
                  {/*content*/}
                  <div className=" reseller-popup w-90 mr-5 ml-5 sm:w-100 md:w-90 lg:w-90 xl:w-90 sm:h-60 md:h-50 lg:h-45 xl:h-41 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none border-green-500">
                    {status ? (
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
                          <p className="font-bold text-center text-2xl text-wrap">
                            Show error occured
                          </p>
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
      </>
    </div>
  );
};

export default OrderGrab;
