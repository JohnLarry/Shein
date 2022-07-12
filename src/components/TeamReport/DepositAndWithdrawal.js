import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const DepositAndWithdrawal = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Team Report</h1>
      </div>
      <div className="flex justify-between max-w-[600px] md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/team-report/agent">Agent Report</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/deposit-withdraw">Deposit and withdrawal details</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select class="select select-secondary select-bordered w-[150px] max-w-xs">
          <option disabled selected>
            Today
          </option>
          <option>Yesterday</option>
          <option>Within a week</option>
          <option>Start from 2022/07/12</option>
        </select>
        <select class="select select-secondary select-bordered w-[150px] max-w-xs">
          <option disabled selected>
            All
          </option>
          <option>Deposit history</option>
          <option>Withdrawal history</option>
        </select>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Account</th>
              <th>Time</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
};

export default DepositAndWithdrawal;
