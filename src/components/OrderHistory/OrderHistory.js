import React from "react";
import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import "./OrderHistory.css";

const OrderHistory = () => {
  return (
    <>
      <div className="bg-slate-800">
        <header className=" bg-gray-900 navbar flex justify-end  pr-5   py-4">
          <h1
            href
            className=" lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-white"
          >
            History
          </h1>
        </header>
        <div className="bg-slate-800 content-area py-20 ">
          <div className="container mx-auto max-w-[1080px]">
            <section>
              <div className="p-10 shadow-lg  w-full bg-gray-700 text-neutral-content">
                <div className=" items-center text-center ">
                  <h2 className=" font-bold text-3xl">
                    This data is provide by SHEIN
                  </h2>
                  <p className="text-white font-bold my-3 text-xl">
                    My total assests
                  </p>
                  <p className="font-bold text-7xl text-purple-300">0</p>
                </div>
              </div>
            </section>

            <section className="">
              <div className=" bg-gray-600 ">
                <ul className="flex  text-small py-4 lg:text-xl md:text-xl text-center text-white">
                  <li>
                    <Link to="/">All</Link>
                  </li>
                  <li>
                    <Link to="/p">Pending</Link>
                  </li>
                  <li>
                    <Link to="/p">Completed</Link>
                  </li>
                  <li>
                    <Link to="/p">Canceled</Link>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-slate-800 container  my-10 ">
              <div className="overflow-x-auto w-full  ">
                <table className="table w-11/12 mx-auto">
                  <thead>
                    <tr>
                      <th>Product Title </th>
                      <th>Image</th>
                      <th>Price</th>
                      <th>Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="font-bold"> Mobile </th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16">
                              <img
                                src="https://daisyui.com/tailwind-css-component-profile-5@56w.png"
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold">
                        120{" "}
                        <sup>
                          <i className="fa-solid fa-dollar-sign"></i>
                        </sup>{" "}
                      </td>
                      <td className="font-bold">
                        12{" "}
                        <sup>
                          <i className="fa-solid fa-percent"></i>
                        </sup>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="bg-slate-800">
              <div className="">
                <img
                  className=" mx-auto my-12 h-64 lg:72 md:72"
                  src="https://sheinbj.com/_nuxt/cea5d78.svg"
                  alt=""
                  srcset=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <Navber></Navber>
    </>
  );
};

export default OrderHistory;
