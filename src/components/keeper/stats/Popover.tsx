type PopoverProps = {
  setShowPopover: (val: boolean) => void;
  currentStat: string;
  availableDice: string[];
  selectDieForStat: (statName: string, die: string) => void;
};

const StatValue = ({ die, onClick }: { die: string; onClick: () => void }) => {
  return (
    <div className="w-1/2 p-2" onClick={onClick}>
      <div className="min-h-12 border border-solid p-3">{die}</div>
    </div>
  );
};

const Popover = ({
  setShowPopover,
  currentStat,
  availableDice,
  selectDieForStat,
}: PopoverProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>{currentStat}</div>
      <div className="flex flex-row flex-wrap justify-between ">
        {availableDice.map((die: string) => {
          return (
            <StatValue
              key={die}
              die={die}
              onClick={() => selectDieForStat(currentStat, die)}
            />
          );
        })}
      </div>
      <button
        className="mt-4 border-2 border-solid"
        onClick={() => {
          setShowPopover(false);
        }}
      >
        cancel
      </button>
    </div>
  );
};

export default Popover;
