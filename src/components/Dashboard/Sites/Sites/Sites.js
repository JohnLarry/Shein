import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authkey, logged } from "../../../Login/authkey";
import Site from "../Site/Site";

const Sites = () => {
  const navigate = useNavigate();
  const [sites, setSites] = useState([]);

  var login = new FormData();
  login.append("dashboard", "");
  login.append("auth", authkey);
  login.append("logged", localStorage.getItem("auth"));

  fetch("https://mining-nfts.com/api/", {
    method: "POST",
    body: login,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.status == 200) {
        console.log(data);
      } else {
        navigate("/login");
      }
    });
  return (
    <div className="container mx-auto max-w-[1080px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {sites.map((site) => (
          <Site key={site.id} site={site}></Site>
        ))}
      </div>
    </div>
  );
};

export default Sites;
