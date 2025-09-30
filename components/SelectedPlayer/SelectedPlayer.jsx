import React from "react";
import { createIcons, icons } from "lucide";
createIcons({ icons });

const SelectedPlayer = ({ Player }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex h-fit gap-2.5 items-center mb-3">
        <img
          className="w-10 h-10 rounded-xl"
          src={Player.player_image}
          alt=""
        />
        <div>
          <h4>{Player.player_name}</h4>
          <p>{Player.playing_role}</p>
        </div>
      </div>
      <div className=" cursor-pointer">
        {" "}
        <i data-lucide="trash"></i>
      </div>
    </div>
  );
};

export default SelectedPlayer;
