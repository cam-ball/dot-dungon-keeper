import Stat from "./Stat";
import Popover from "./Popover";
import { useState } from "react";

const Stats = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="w-100 min-h-52 basis-1/3 border-2 border-dashed p-8 text-center">
      {showPopover ? (
        <Popover setShowPopover={setShowPopover} />
      ) : (
        <>
          <h3>stats</h3>
          <div className="flex flex-row justify-between">
            <Stat statName="build" setShowPopover={setShowPopover} />
            <Stat statName="meta" setShowPopover={setShowPopover} />
          </div>
          <div className="flex flex-row justify-between">
            <Stat statName="presence" setShowPopover={setShowPopover} />
            <Stat statName="hands" setShowPopover={setShowPopover} />
          </div>
          <div className="flex flex-row justify-between">
            <Stat statName="tilt" setShowPopover={setShowPopover} />
            <Stat statName="rng" setShowPopover={setShowPopover} />
          </div>
        </>
      )}
    </div>
  );
};

export default Stats;
