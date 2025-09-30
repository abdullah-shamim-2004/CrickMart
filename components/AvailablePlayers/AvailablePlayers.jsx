import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  toast,
  PlayersPromise,
  SetAvailableBalence,
  availableBalence,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const PlayersData = use(PlayersPromise);

  return (
    <div className="bg-white  max-w-[1200px] m-auto grid gap-3 grid-cols-3 max-[576px]:grid-cols-1 max-[576px]:m-auto">
      {
        PlayersData.map((player) => (
          <PlayerCard
            key={player.id}
            toast={toast}
            setPurchasedPlayers={setPurchasedPlayers}
            purchasedPlayers={purchasedPlayers}
            availableBalence={availableBalence}
            SetAvailableBalence={SetAvailableBalence}
            player={player}
          ></PlayerCard>
        ))

        //  console.log(player);const [player_image]=player
      }
    </div>
  );
};

export default AvailablePlayers;
