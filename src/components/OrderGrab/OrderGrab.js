import React from "react";
import "./OrderGrab.css";

const OrderGrab = () => {
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
                    <button className="btn text-white w-full font-bold bg-gray-900">
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
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
    </div>
  );
};

export default OrderGrab;
