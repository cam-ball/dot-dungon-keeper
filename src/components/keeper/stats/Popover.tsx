type PopoverProps = {
  setShowPopover: (val: boolean) => void;
  currentStat: string;
  availableDice: string[];
  selectDieForStat: (statName: string, die: string) => void;
};

const StatValue = ({ die, onClick }: { die: string; onClick: () => void }) => {
  return (
    <div className="border-2 border-dashed p-4" onClick={onClick}>
      {die}
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
      <div>Set your {currentStat}</div>
      {availableDice.map((die: string) => {
        return (
          <StatValue
            die={die}
            onClick={() => selectDieForStat(currentStat, die)}
          />
        );
      })}
      <button
        onClick={() => {
          setShowPopover(false);
        }}
      >
        stop poppin!
      </button>
    </div>
  );
};

export default Popover;
