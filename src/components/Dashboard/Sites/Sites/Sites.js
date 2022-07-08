import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authkey, logged } from "../../../Login/authkey";
import Site from "../Site/Site";

const Sites = ({ users }) => {
  return (
    <div className="container mx-auto max-w-[1080px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {users?.message?.pack.map((pack) => (
          <Site key={pack.id} pack={pack}></Site>
        ))}
      </div>
    </div>
  );
};

export default Sites;
