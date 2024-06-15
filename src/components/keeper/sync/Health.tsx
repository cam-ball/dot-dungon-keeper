import { useState, ChangeEvent } from "react";

type HealthProps = {
  syncValue: number;
  handleSyncChange: (value: number) => void;
};
const Health = ({ syncValue, handleSyncChange }: HealthProps) => {
  const [inputValue, setInputValue] = useState<number>(1);

  const addSync = () => {
    handleSyncChange(Math.min(100, syncValue + inputValue));
  };

  const reduceSync = () => {
    handleSyncChange(Math.max(0, syncValue - inputValue));
  };

  return (
    <>
      <div className="mt-4 text-7xl">
        <h4 style={{ textShadow: "0 0 20px white" }}>{syncValue}</h4>
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
    </>
  );
};

export default Health;
