import React, { useState } from "react";
import ManLogo from "../../src/assets/user-1.png";
import Flag from "../../src/assets/report-1.png";

const PlayerCard = ({
  player,
  availableBalence,
  SetAvailableBalence,
  purchasedPlayers,
  setPurchasedPlayers,
  toast,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleAvailableBalence = (playerData) => {
    const cleanPrice = Number(
      playerData.price.replace(/,/g, "").replace("USD", "").trim()
    );

    if (availableBalence >= cleanPrice) {
      toast(
        `Congratulations! You selected ${playerData.player_name} and We cut ${playerData.price} from your account. To Check your balace see on the top `
      );

      SetAvailableBalence(availableBalence - cleanPrice);
      setIsSelected(true);
      setPurchasedPlayers([...purchasedPlayers, playerData]);
    } else {
      toast("Sorry, You do not have enough money.");
    }
  };

  return (
    <div className="card p-2.5 bg-base-100 shadow-sm ">
      <figure>
        <img
          className="h-[300px] w-[300px] object-cover rounded-2xl"
          src={player.player_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <div className="flex ">
          <img className="w-[20px] h-[20px] " src={ManLogo} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={Flag} alt="" />
            <p className="ml-2">{player.player_country}</p>
          </div>
          <div>
            <button className="btn">{player.playing_role}</button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h4>Rating</h4>
          </div>
          <div>
            <h4>{player.rating}</h4>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h4>{player.bating_style}</h4>

          <h4 className="text-gray-500">{player.bowling_style}</h4>
        </div>

        <div className="card-actions flex justify-between items-center">
          <div className="flex">
            <h4>Price: </h4>
            <span> ${player.price}</span>
          </div>
          <button
            disabled={isSelected}
            onClick={() => handleAvailableBalence(player)}
            className="btn "
          >
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
