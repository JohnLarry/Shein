import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const TeamReport = () => {
  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">Team Report</h1>
      </div>
      <div className="flex justify-between max-w-[600px] mx-20 md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/team-report/agent">Agent Report</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/summary">Summary</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <select class="select select-secondary select-bordered w-[150px] max-w-xs">
          <option disabled selected>
            Today
          </option>
          <option>Yesterday</option>
          <option>Within a day</option>
          <option>Customized</option>
        </select>
        <select class="select select-secondary select-bordered w-[150px] max-w-xs">
          <option disabled selected>
            All
          </option>
        </select>
      </div>
      <div class="card mx-auto bg-base-200 shadow-xl w-full">
        <div class="card-body">
          <div className="flex gap-5 mb-5">
            <div>
              <h2 class="card-title">Financial Info</h2>
            </div>
          </div>

          <div className="flex justify-between">
            <h1>Balance</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Deposit amount</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Withdrawal amount</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Profit</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Grab amount</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Rebate amount</h1>
            <h1>0</h1>
          </div>
        </div>
      </div>
      <div class="card mx-auto bg-base-200 shadow-xl w-full my-5">
        <div class="card-body">
          <div className="flex gap-5 mb-5">
            <div>
              <h2 class="card-title">Team member details</h2>
            </div>
          </div>

          <div className="flex justify-between">
            <h1>Active people</h1>
            <h1>1</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Number of team members</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>Number of new members</h1>
            <h1>0</h1>
          </div>
          <hr />
          <div className="flex justify-between">
            <h1>First deposit members</h1>
            <h1>0</h1>
          </div>
        </div>
      </div>
      <button className="btn btn-primary btn-outline w-full">Read more</button>
    </div>
  );
};

export default TeamReport;
