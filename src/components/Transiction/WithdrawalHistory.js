import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { authkey } from "../Login/authkey";

const WithdrawalHistory = () => {
  const [dataLimit, setDataLimit] = useState();
  const [whitdrawHistory, setWhitdrawHistory] = useState([]);
  const navigate = useNavigate();
  let count = 1;

  useEffect(() => {
    var history = new FormData();
    history.append("history", "");
    history.append("withdraw_history", "");
    history.append("limit", 500);
    history.append("auth", authkey);
    history.append("logged", localStorage.getItem("auth"));
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: history,
    })
      .then((res) => res.json())
      .then((depoHistoryData) => {
        if (depoHistoryData.status == 200) {
          setWhitdrawHistory(depoHistoryData?.message);
        } else {
          navigate("/login");
        }
      });
  }, []);

  let a1 = whitdrawHistory?.slice(0, 50);
  let a2 = whitdrawHistory?.slice(0, 100);
  let a3 = whitdrawHistory?.slice(0, 200);
  let a4 = whitdrawHistory?.slice(0, 300);
  let a5 = whitdrawHistory?.slice(0, 400);
  let a6 = whitdrawHistory?.slice(0, 500);

  let d = a2;

  if (dataLimit == 1) {
    d = a1;
  } else if (dataLimit == 2) {
    d = a2;
  } else if (dataLimit == 3) {
    d = a3;
  } else if (dataLimit == 4) {
    d = a4;
  } else if (dataLimit == 5) {
    d = a5;
  } else if (dataLimit == 6) {
    d = a6;
  } else if (dataLimit == 100) {
    d = a6;
  }

  const info = document.getElementById("info");
  // paid(success  ),pending(warning),process(primary ),Cancelled(danger);

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Transaction</h1>
      </div>
      <div className="flex justify-between max-w-[600px]  md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/withdrawal-history">Withdrawal History</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-history">Deposit History </Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select
          id="dataLimit"
          defaultValue="Select Limit"
          onChange={(e) => setDataLimit(e.target.value)}
          className="select select-secondary select-bordered w-[150px] max-w-xs"
        >
          <option vlaue={100} selected>
            All
          </option>
          <option value={1}>50</option>
          <option value={2}>100</option>
          <option value={3}>200</option>
          <option value={4}>300</option>
          <option value={5}>400</option>
          <option value={6}>500</option>
        </select>
      </div>
      <div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Account</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            {d?.map((p) => (
              <tbody key={p?.id}>
                <tr>
                  <th>{count++}</th>
                  <td>{p?.id}</td>
                  <td>{p?.date}</td>
                  <td>{p?.amount}</td>

                  <td>
                    <div className="text-center ">
                      {p?.status == "paid" ? (
                        <div className="flex font-bold ">
                          <span class="ml-2 rounded-lg badge badge-success gap-2">
                            Paid
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                      {p?.status == "pending" ? (
                        <div className="flex font-bold ">
                          <span class="ml-2 rounded-lg badge badge-warning gap-2">
                            Pending
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}

                      {p?.status == "process" ? (
                        <div className="flex font-bold ">
                          <span class="ml-2 rounded-lg badge badge-primary gap-2">
                            Being Proceed
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                      {p?.status == "cancelled" ? (
                        <div className="flex font-bold ">
                          <span class="ml-2 rounded-lg badge badge-danger gap-2">
                            Cancelled
                          </span>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalHistory;
