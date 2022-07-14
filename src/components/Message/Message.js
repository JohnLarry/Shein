import React, { useState } from "react";
import { authkey } from "../Login/authkey";

const Message = () => {
  const [message, setMessage] = useState();
  //   var allHistory = new FormData();
  //   allHistory.append("auth", authkey);
  //   allHistory.append("logged", localStorage.getItem("auth"));
  //   allHistory.append("history", "");
  //   allHistory.append("all", "");

  //   fetch("https://mining-nfts.com/api/", {
  //     method: "POST",
  //     body: allHistory,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);

  //       if (data.status == 200) {
  //         console.log(data);
  //         setMessage(data);
  //       } else {
  //         console.log(data);
  //       }
  //     });
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div>
        <h1>Notification</h1>
      </div>
      {/* <div className="">
        {message.map((mes) => (
          <div></div>
        ))}
      </div> */}
    </div>
  );
};

export default Message;
