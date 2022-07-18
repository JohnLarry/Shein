import React, { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { useNavigate } from 'react-router-dom';
import { authkey } from '../Login/authkey';
import './Wheel4.css'
var counter;
const Wheel4 = () => {
    const p = 5;

    const [winDataT, setWinDataT] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        var history = new FormData();
        history.append("spinner", "");
        history.append("auth", authkey);
        history.append("limit", 500);
        history.append("logged", localStorage.getItem('auth'));
        fetch("https://mining-nfts.com/api/", {
            method: "POST",
            body: history,
        })
            .then((res) => res.json())
            .then((winHistory) => {
                if (winHistory.status == 200) {
                    setWinDataT(winHistory.message);
                      console.log(winHistory?.message);
                } else {
                    navigate("/login");
                }
            });
    }, []);

  
     const data = winDataT?.spinnerNumber;
     console.log("array",data);
    // winNumber

    // const data = [
    //     { option: "0" },
    //     { option: "2" },
    //     { option: "3" },
    //     { option: "5" },
    //     { option: "10" },
    //     { option: "15" },
    //     { option: "20" },
    //     { option: "25" },
    //     { option: "30" },
    //     { option: "50" },
    //     { option: "90" },
    //     { option: "100" },
    // ];
    counter = winDataT?.spinLeft;
    const [winner, setWinner] = useState(0);
    const [mustSpin, setMustSpin] = useState(false);
    const [prizeNumber, setPrizeNumber] = useState(0);
    const handleSpinClick = () => {
        const newPrizeNumber = p;
        const item = data[newPrizeNumber];
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        setWinner(item);
        counter--;
    }



    return (
        <div className="container max-w-[1080] mx-auto my-16">

            <div className="wheel-decider">
                <div id="successInfo" className="text-center text-slate-800"> <br />
                    <h1 className="font-bold lg:text-4xl "> Check your discount with wheel decider!!!</h1>
                    <h4 className="font-bold lg:text-xl pt-5 pb-16 text-blue-800">Spin Left {counter}!</h4>

                </div>
            </div>

            <div className="wheel-decider pb-5" >
                {/* <Wheel className="flex justify-center "
                    backgroundColors={["#081135", "#570C31"]}
                    textColors={["#ffffff"]}
                    // onStopSpinning={stopSpin}
                    radiusLineWidth={2}
                    outerBorderWidth={10}
                    mustStartSpinning={mustSpin}
                    prizeNumber={prizeNumber}
                    data={data}
                    onStopSpinning={() => {
                        setMustSpin(false);
                    }}
                /> */}
            </div>

            <div className="wheel-decider">

                {/* {counter <= 0 ?
                    <button type="button" onClick={handleSpinClick} className="px-8 py-3 font-bold text-white bg-red-300 rounded focus:outline-none" disabled>Spin</button>

                    :
                    <button className="px-8 py-3 font-bold text-white bg-red-800 rounded focus:outline-none " onClick={handleSpinClick}>
                        Spin
                    </button>
                } */}
            </div>

            {/* <div className="wheel-decider">
                <div >
                    {console.log(counter)}

                    <h2 className="text-2xl font-bold py-8">You win
                        {mustSpin == true
                            ? (<span className="pl-2">0</span>)
                            : (<span className="pl-2"> {winner.option}</span>)
                        }</h2>
                </div>


            </div> */}

            <div>
                <div className="text-slate-800 my-10 card w-full bg-white rounded shadow-xl mx-5">
                    <div className="card-body">
                        <h2 className="card-title">Rules Description!</h2>
                        <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus dolores quo libero? Quidem autem obcaecati sit necessitatibus, aut blanditiis mollitia doloribus rem quod inventore.</p>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Wheel4;