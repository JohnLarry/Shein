import Logo from "../../images/8666358.svg";
import smallLogo from "../../images/fd8ca81.png";
// images
import deposit from "../../images/c09a915.svg";
import withdraw from "../../images/5dfa582.svg";
import aboutUs from "../../images/e2c4587.svg";
import rules from "../../images/30da4dc.svg";
import promotion from "../../images/152d578.svg";
import vip from "../../images/101f845.svg";
import event from "../../images/567f27f.svg";
import inviteFriends from "../../images/8da3f99.svg";
import taskImg from "../../images/task1.jpg";
import Navber from "../Navber/Navber";
import { Link } from "react-router-dom";

const Home = () => {
  const tasks = [
    {
      _id: 1,
      task: "VIP-1",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
    {
      _id: 2,
      task: "VIP-2",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
    {
      _id: 3,
      task: "VIP-3",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
    {
      _id: 4,
      task: "VIP-4",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
    {
      _id: 5,
      task: "VIP-5",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
    {
      _id: 6,
      task: "VIP-6",
      img: "../../images/task1.jpg",
      name: "SHEIN",
      amount: "20 0.4%/60 orders",
    },
  ];

  return (
    <>
      <div className="container max-w-[1080px] mx-auto p-5 relative">
        <div className="flex justify-center">
          <img src={Logo} alt="" />
        </div>
        <div className="card mx-auto bg-base-200 shadow-xl w-full">
          <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
              <img src="https://placeimg.com/800/200/arch" class="w-full" />
              <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" class="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <h1>Home</h1>
          </div>
        </div>
        <div className="flex items-center gap-3 my-5">
          <img className="w-14" src={smallLogo} alt="" />
          <h1>Welcome back, User</h1>
        </div>
        <div className="card mx-auto bg-base-200 shadow-xl w-full">
          <div className="card-body">
            <h1>Total</h1>
            <h1>0</h1>
            <div className="flex justify-between">
              <h1>Today's profits</h1>
              <h1>0</h1>
            </div>
            <div className="flex justify-between">
              <h1>Promotion bonus</h1>
              <h1>0</h1>
            </div>
            <div className="flex justify-between">
              <h1>Accumulated profits</h1>
              <h1>0</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 my-10">
          <Link to="/deposit" className="flex flex-col items-center">
            <img src={deposit} alt="" />
            <h1>Deposit</h1>
          </Link>
          <Link to="/withdraw" className="flex flex-col items-center">
            <img src={withdraw} alt="" />
            <h1>Withdraw</h1>
          </Link>
          <Link to="/invite-friends" className="flex flex-col items-center">
            <img src={inviteFriends} alt="" />
            <h1>Invite friends</h1>
          </Link>
          <Link to="/event" className="flex flex-col items-center">
            <img src={event} alt="" />
            <h1>Event</h1>
          </Link>
          <Link to="/about" className="flex flex-col items-center">
            <img src={aboutUs} alt="" />
            <h1>About us</h1>
          </Link>
          <Link to="/rule-description" className="flex flex-col items-center">
            <img src={rules} alt="" />
            <h1>Rules description</h1>
          </Link>
          <Link to="/promo" className="flex flex-col items-center">
            <img src={promotion} alt="" />
            <h1>Promotion description</h1>
          </Link>
          <Link to="/current-level" className="flex flex-col items-center">
            <img src={vip} alt="" />
            <h1>VIP</h1>
          </Link>
        </div>
        <div>
          <div className="my-8">
            <h1 className="text-center text-xl">Task Lobby</h1>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {tasks.map((task) => (
              <div
                key={task._id}
                className="card mx-auto bg-base-200 shadow-xl w-full p-5 relative"
              >
                <div>
                  <img src={taskImg} className="rounded-lg" alt="" />
                  <h1>{task.name}</h1>
                  <p>Amount: {task.amount}</p>
                </div>
                <span className="absolute bg-primary px-3 rounded-lg bottom-0 right-0">
                  {task.task}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navber></Navber>
    </>
  );
};

export default Home;
