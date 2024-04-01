type StatProps = {
  statName: string;
  onClick: (stat: string) => void;
  die: string;
};

const Stat = ({ statName, onClick, die }: StatProps) => {
  return (
    <div className="m-2 w-1/2">
      <h4>{statName}</h4>
      <div
        className="border-2 border-dashed p-4"
        onClick={() => {
          onClick(statName);
        }}
      >
        {die}
      </div>
    </div>
  );
};

export default Stat;
