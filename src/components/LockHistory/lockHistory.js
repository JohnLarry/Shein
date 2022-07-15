import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { updateDashboardMessage } from "../../store/slice";
import { authkey } from "../Login/authkey";
const LockHistory = () => {
  const dispatch = useDispatch();
  var dashboard = new FormData();
  dashboard.append("dashboard", "");
  dashboard.append("auth", authkey);
  dashboard.append("logged", localStorage.getItem("auth"));
  useEffect(() => {
    fetch("https://mining-nfts.com/api/", {
      method: "POST",
      body: dashboard,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          dispatch(updateDashboardMessage(data.message));
        }
      });
  }, []);
  const dashboardMessage = useSelector(
    (state) => state.dashboardmessage.message
  );
  console.log(dashboardMessage);
  return (
    <div class="overflow-x-auto">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/profile">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Lock History</h1>
      </div>
      <table class="table table-zebra w-full">
        <thead>
          <tr>
            <th>User name</th>
            <th>Amount</th>

            <th>Counter</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(dashboardMessage).length > 0
            ? dashboardMessage.locked_history.map((item, index) => (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.amount}</td>
                  <td>{item.counter}</td>
                  <td>{item.status}</td>
                  <td>{item.time}</td>
                </tr>
              ))
            : "Loading"}
        </tbody>
      </table>
    </div>
  );
};

export default LockHistory;
