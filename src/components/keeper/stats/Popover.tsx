type PopoverProps = {
  setShowPopover: (val: boolean) => void;
  currentStat: string;
};

const Popover = ({ setShowPopover, currentStat }: PopoverProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>this is the popover!</div>
      <div>the selected stat is {currentStat}</div>
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
