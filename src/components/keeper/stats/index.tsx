import Stat from "./Stat";
import Popover from "./Popover";
import { useState } from "react";
import { StatDice } from "../../../utilities/constants";

const initialState = {
  build: null,
  meta: null,
  presence: null,
  hands: null,
  tilt: null,
  rng: null,
};

const Stats = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [currentStat, setCurrentStat] = useState<string | null>(null);
  const [availableDice, setAvailableDice] = useState<string[]>([...StatDice]);
  const [statAllocation, setStatAllocation] = useState<any>({
    ...initialState,
  });

  const selectStat = (statName: string) => {
    if (!statAllocation[statName]) {
      setShowPopover(true);
      setCurrentStat(statName);
    }
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
    <div className="w-100 min-h-96 basis-1/3 border-2 border-solid p-8 text-center">
      <h3 className="font-mono">// S–T–A–T–S //</h3>
      {showPopover ? (
        <Popover
          setShowPopover={setShowPopover}
          currentStat={currentStat as string}
          availableDice={availableDice}
          selectDieForStat={selectDieForStat}
        />
      ) : (
        <>
          <div className="flex flex-row flex-wrap justify-between">
            {Object.entries(statAllocation).map(([key, value]) => {
              return (
                <Stat
                  key={key}
                  statName={key}
                  onClick={selectStat}
                  die={value as string}
                />
              );
            })}
          </div>
          {currentStat && (
            <button
              className="mt-4 border-2 border-solid p-4"
              onClick={() => {
                setStatAllocation({ ...initialState });
                setAvailableDice([...StatDice]);
                setCurrentStat(null);
              }}
            >
              reset
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Stats;
