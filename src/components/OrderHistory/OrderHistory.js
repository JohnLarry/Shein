import React from "react";
import { Link } from "react-router-dom";
import Navber from "../Navber/Navber";
import "./OrderHistory.css";

const OrderHistory = () => {

  return (
    <div className="bg-white ">
      <header className=" bg-slate-200 navbar flex justify-end  pr-5   py-4">
        <h1 href className=" lg:pr-5 md:pr-5  uppercase text-base md:text-2xl lg:text-3xl  font-bold text-black"> <Link to="/order-history">History</Link> </h1>
      </header>
      <div className="  my-24 ">
        <div className="container mx-auto max-w-[1080]">
          <section>
            <div className="p-10 shadow-lg  w-full  rounded">
              <div className=" items-center text-center ">
                <h2 className=" font-bold text-3xl text-sky-900">This data is provide by farfetchedgrab</h2>
                <p className="text-black font-bold my-3 text-xl">My  assest</p>
                <p className="font-bold text-7xl text-purple-800">{0}</p>
              </div>
            </div>
          </section>

          <section className='my-10 mx-5'>
            <div className="flex justify-between max-w-[600px] md:mx-auto">
              <div className="flex flex-col items-center">
                <Link to="/grab-history">Grab History</Link>
                <div className="h-[2px] w-6 bg-primary"></div>
              </div>
              <div className="flex flex-col items-center">
                <Link to="/earn-history">Earn History</Link>
                <div className="h-[2px] w-6 bg-primary"></div>
              </div>
            </div>
          </section>


        </div>
      </div>
      <div className="OrderHistoryFooter">
        <Navber></Navber>
      </div>
    </div>


  );
};

export default OrderHistory;
