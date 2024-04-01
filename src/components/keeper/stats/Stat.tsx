type StatProps = {
  statName: string;
  setShowPopover: (val: boolean) => void;
};

const Stat = ({ statName, setShowPopover }: StatProps) => {
  return (
    <div className="m-2 w-1/2">
      <h4>{statName}</h4>
      <div
        className="border-2 border-dashed p-4"
        onClick={() => {
          setShowPopover(true);
        }}
      >
        {""}
      </div>
    </div>
  );
};

export default Stat;
