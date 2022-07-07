import React, { useEffect, useState } from "react";
import Site from "../Site/Site";

const Sites = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("taskloby.json")
      .then((res) => res.json())
      .then((data) => setSites(data));
  }, []);
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
