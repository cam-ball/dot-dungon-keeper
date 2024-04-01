type PopoverProps = {
  setShowPopover: (val: boolean) => void;
};

const Popover = ({ setShowPopover }: PopoverProps) => {
  return (
    <div className="flex flex-col justify-between">
      <div>this is the popover!</div>
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
