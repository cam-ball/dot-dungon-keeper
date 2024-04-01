type PopoverProps = {
  setShowPopover: (val: boolean) => void;
  currentStat: string;
  availableDice: string[];
};

const StatValue = ({ die }: { die: string }) => {
  return <div className="border-2 border-dashed p-4">{die}</div>;
};

const Popover = ({
  setShowPopover,
  currentStat,
  availableDice,
}: PopoverProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>Set your {currentStat}</div>
      {availableDice.map((die: string) => {
        return <StatValue die={die} />;
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
