import { Suspense, useState } from "react";
import AvailablePlayers from "../components/AvailablePlayers/AvailablePlayers";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import SelectedPlayers from "../components/SelectedPlayers/SelectedPlayers";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const PlayersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalence, SetAvailableBalence]=useState(1000000)

  return (
    <>
      <Navbar availableBalence={availableBalence}></Navbar>
      <div className="flex justify-between items-center max-w-[1200px] m-auto">
        <div className="font-bold">Available Players</div>
        <div className="font-semibold">
          <button
            onClick={() => setToggle(true)}
            className={`p-3 cursor-pointer border-r-0  border-1 border-gray-400 rounded-l-2xl ${
              toggle === true ? "bg-amber-300" : " "
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`p-3 cursor-pointer border-r-0  border-1 border-gray-400 rounded-r-2xl ${
              toggle === false ? "bg-amber-300" : " "
            }`}
          >
            Selected
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <AvailablePlayers availableBalence={availableBalence} SetAvailableBalence={SetAvailableBalence} PlayersPromise={PlayersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers></SelectedPlayers>
      )}
    </>
  );
}

export default App;
