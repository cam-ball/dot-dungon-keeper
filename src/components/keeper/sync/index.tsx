import { useState } from "react";
import Health from "./Health";
import RestDice from "./RestDice";

const Sync = () => {
  const [_previousSync, setPreviousSync] = useState<number>(100);
  const [syncValue, setSyncValue] = useState<number>(100);
  const [restDice, _setRestDice] = useState<number>(0);

  const handleSyncChange = (newSync: number) => {
    setPreviousSync(syncValue);
    setSyncValue(newSync);
  };

  return (
    <div className="min-h-52 basis-1/3 p-8 text-center">
      <h3 className="font-mono">// S–Y–N–C //</h3>
      <Health syncValue={syncValue} handleSyncChange={handleSyncChange} />
      <RestDice restDice={restDice} />
    </div>
  );
};

export default Sync;
