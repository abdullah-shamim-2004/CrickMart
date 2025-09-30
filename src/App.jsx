import { Suspense, useState } from "react";
import AvailablePlayers from "../components/AvailablePlayers/AvailablePlayers";
import Navbar from "../components/Navbar/Navbar";
import "./App.css";
import SelectedPlayers from "../components/SelectedPlayers/SelectedPlayers";
import { ToastContainer, toast } from "react-toastify";

const fetchPlayers = async () => {
  const res = await fetch("/Players.json");
  return res.json();
};
const PlayersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalence, SetAvailableBalence] = useState(1200000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

  return (
    <>
      <Navbar availableBalence={availableBalence}></Navbar>
      <div className="flex justify-between items-center max-w-[1200px] m-auto my-4">
        <div className="font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </div>
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
            {` Selected (${purchasedPlayers.length}/6)`}
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-md"></span>
          }
        >
          <ToastContainer />
          <AvailablePlayers
            toast={toast}
            setPurchasedPlayers={setPurchasedPlayers}
            purchasedPlayers={purchasedPlayers}
            availableBalence={availableBalence}
            SetAvailableBalence={SetAvailableBalence}
            PlayersPromise={PlayersPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
      )}
    </>
  );
}

export default App;
