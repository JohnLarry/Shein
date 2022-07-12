import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { updateSummary } from "../../store/slice";

const Summary = () => {
  const dispatch = useDispatch();
  const summary = useSelector((state) => state.summary.data);
  const user = useSelector((state) => state.user.data);
  let iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <div className="container max-w-[1080px] mx-auto p-5">
      <div className="bg-base-200 p-5 rounded-xl mb-5 flex items-center justify-between">
        <Link to="/">
          <IoIosArrowBack></IoIosArrowBack>
        </Link>
        <h1 className="text-xl font-bold text-center">VIP</h1>
      </div>
      <div className="flex justify-between max-w-[600px] md:mx-auto">
        <div className="flex flex-col items-center">
          <Link to="/current-level">Current Level</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
        <div className="flex flex-col items-center">
          <Link to="/summary">Summary</Link>
          <div className="h-[2px] w-6 bg-primary"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        {summary.map((card) => (
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              {user[0][card.packName.toLowerCase() + "_orders"] !== null ? (
                <div className="flex justify-between">
                  <h1>{card.packName}</h1>

                  <div className="flex">
                    <span className="flex">
                      Completed level{" "}
                      <GrStatusGood style={iconStyles}></GrStatusGood>
                    </span>

                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between">
                    <h1>{card.packName}</h1>

                    <AiOutlineArrowRight></AiOutlineArrowRight>
                  </div>

                  <div className="flex justify-between">
                    <h1>Commission rate</h1>
                    <h1>{card.commission_percent}</h1>
                  </div>
                  <div className="flex justify-between">
                    <h1>Open markets</h1>
                    <h1>{card.marketName}</h1>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
