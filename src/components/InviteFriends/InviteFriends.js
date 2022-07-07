import React from "react";
import { Link } from "react-router-dom";

const InviteFriends = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <Link to="/profile" className="btn btn-base-200 m-5">
        Back
      </Link>
      <div className="mt-48 text-center">
        <h1 className="text-5xl font-extrabold text-white">Invite A Friend</h1>
        <h1 className="text-3xl font-bold text-white">to join our family</h1>
        <p className="my-5">
          Invitation code <span className="text-xl">66364</span>
        </p>
        <button className="btn btn-primary">Copy link</button>
      </div>
    </div>
  );
};

export default InviteFriends;
