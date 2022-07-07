import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

const Summary = () => {
  const [vipCard, setVipCard] = useState([
    {
      _id: 1,
      title: "VIP1",
      rate: 0.4,
      rateTitle: "Commission rate",
      marketTitle: "Open markets",
      market: "Shein",
    },
    {
      _id: 2,
      title: "VIP2",
      rate: 0.45,
      rateTitle: "Commission rate",
      marketTitle: "Open markets",
      market: "Etsy",
    },
    {
      _id: 3,
      title: "VIP3",
      rate: 0.5,
      rateTitle: "Commission rate",
      marketTitle: "Open markets",
      market: "Walmart",
    },
    {
      _id: 4,
      title: "VIP4",
      rate: 0.55,
      rateTitle: "Commission rate",
      marketTitle: "Open markets",
      market: "Ebay",
    },
    {
      _id: 5,
      title: "VIP5",
      rate: 0.6,
      rateTitle: "Commission rate",
      marketTitle: "Open markets",
      market: "Amazon",
    },
  ]);
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">VIP</h1>
      </div>
      <div className="flex justify-between max-w-[600px] mx-20 md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/current-level">Current Level</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/summary">Summary</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {vipCard.map((card) => (
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between">
                <h1>{card.title}</h1>
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </div>
              <div className="flex justify-between">
                <h1>{card.rateTitle}</h1>
                <h1>{card.rate}</h1>
              </div>
              <div className="flex justify-between">
                <h1>{card.marketTitle}</h1>
                <h1>{card.market}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
