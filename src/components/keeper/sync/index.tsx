import { useState, ChangeEvent } from "react";

const Sync = () => {
  const [previousSync, setPreviousSync] = useState<number>(100);
  const [syncValue, setSyncValue] = useState<number>(100);
  const [inputValue, setInputValue] = useState<number>(1);

  const addSync = () => {
    setPreviousSync(syncValue);
    setSyncValue(Math.min(100, syncValue + inputValue));
  };

  const reduceSync = () => {
    setPreviousSync(syncValue);
    setSyncValue(Math.max(0, syncValue - inputValue));
  };

  return (
    <div className="min-h-52 basis-1/3 p-8 text-center">
      <h3 className="font-mono">// S–Y–N–C //</h3>
      <div className="mt-4 text-7xl">
        <h4>{syncValue}</h4>
      </div>
      <div className="mt-4 flex flex-row justify-around">
        <button
          onClick={reduceSync}
          className="border border-2 border-red-700 px-4 text-3xl text-red-700"
        >
          -
        </button>
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          className="w-24 text-center text-3xl"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const v = Number(e.target.value);
            if (!isNaN(v)) {
              setInputValue(v);
            }
          }}
        />
        <button
          onClick={addSync}
          className="border-2 border-green-700 px-4 text-3xl text-green-700"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Sync;
