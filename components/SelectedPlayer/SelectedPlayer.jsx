import React from "react";
import { Trash } from "lucide-react";

const SelectedPlayer = ({ Player, onRemove }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex h-fit gap-2.5 items-center mb-3">
        <img
          className="w-10 h-10 rounded-xl"
          src={Player.player_image}
          alt={Player.player_name}
        />
        <div>
          <h4 className="font-bold">{Player.player_name}</h4>
          <p className="text-sm text-gray-500">{Player.playing_role}</p>
        </div>
      </div>
      <div
        className="cursor-pointer hover:text-red-600 transition"
        onClick={() => onRemove(Player.id)} 
      >
        <Trash />
      </div>
    </div>
  );
};

export default SelectedPlayer;
