import Stat from "./Stat";
import Popover from "./Popover";
import { useState } from "react";

const Stats = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [currentStat, setCurrentStat] = useState<string | null>(null);

  const selectStat = (statName: string) => {
    setShowPopover(true);
    setCurrentStat(statName);
  };

  return (
    <div className="w-100 min-h-52 basis-1/3 border-2 border-dashed p-8 text-center">
      {showPopover ? (
        <Popover
          setShowPopover={setShowPopover}
          currentStat={currentStat as string}
        />
      ) : (
        <>
          <h3>stats</h3>
          <div className="flex flex-row justify-between">
            <Stat statName="build" onClick={selectStat} />
            <Stat statName="meta" onClick={selectStat} />
          </div>
          <div className="flex flex-row justify-between">
            <Stat statName="presence" onClick={selectStat} />
            <Stat statName="hands" onClick={selectStat} />
          </div>
          <div className="flex flex-row justify-between">
            <Stat statName="tilt" onClick={selectStat} />
            <Stat statName="rng" onClick={selectStat} />
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
