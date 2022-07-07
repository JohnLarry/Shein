import React from "react";

const Site = ({ site }) => {
  const { name, amount, img } = site;
  return (
    <div className="bg-neutral my-3 mx-5 rounded-lg shadow-sm">
      <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg  ">
        <figure>
          <img className="shadow-xl w-full h-full" src={img} alt="Album" />
        </figure>
        <div className="card-body bg-neutral text-white">
          <h2 className=" text-2xl card-title">{name}</h2>
          <p className="font-bold"> Amount: {amount} % per order.</p>
        </div>
      </div>
    </div>
  );
};

export default Site;
