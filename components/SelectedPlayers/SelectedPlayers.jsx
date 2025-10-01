import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayers, onRemove }) => {
  return (
    <div className="max-w-[1280px] m-auto">
      {purchasedPlayers.length === 0
        ? "Choose player from available players."
        : purchasedPlayers.map((Player) => (
            <SelectedPlayer
              key={Player.id}
              onRemove={onRemove}
              Player={Player}
            ></SelectedPlayer>
          ))}
    </div>
  );
};

export default SelectedPlayers;
