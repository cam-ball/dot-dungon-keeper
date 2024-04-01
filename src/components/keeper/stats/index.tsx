import Stat from "./Stat";
import Popover from "./Popover";
import { useState } from "react";
import { StatDice } from "../../../utilities/constants";

const initialState = {
  build: "",
  meta: "",
  presence: "",
  hands: "",
  tilt: "",
  rng: "",
};

const Stats = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [currentStat, setCurrentStat] = useState<string | null>(null);
  const [availableDice, setAvailableDice] = useState<string[]>(StatDice);
  const [statAllocation, setStatAllocation] = useState<any>(initialState);

  const selectStat = (statName: string) => {
    setShowPopover(true);
    setCurrentStat(statName);
  };

  const selectDieForStat = (statName: string, die: string) => {
    const newAllocation = statAllocation;
    newAllocation[statName] = die;

    const index = availableDice.indexOf(die);
    const newAvailableDice = availableDice;
    newAvailableDice.splice(index, 1);

    setStatAllocation(newAllocation);
    setAvailableDice(newAvailableDice);
    setShowPopover(false);
  };

  return (
    <div className="w-100 min-h-52 basis-1/3 border-2 border-dashed p-8 text-center">
      {showPopover ? (
        <Popover
          setShowPopover={setShowPopover}
          currentStat={currentStat as string}
          availableDice={availableDice}
          selectDieForStat={selectDieForStat}
        />
      ) : (
        <>
          <h3>stats</h3>
          <div className="flex flex-row justify-between">
            {Object.entries(statAllocation).map(([key, value]) => {
              return (
                <Stat
                  statName={key}
                  onClick={selectStat}
                  die={value as string}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
