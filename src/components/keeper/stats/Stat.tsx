type StatProps = {
  statName: string;
  onClick: (stat: string) => void;
  die: string;
};

const Stat = ({ statName, onClick, die }: StatProps) => {
  return (
    <div className="w-1/2 p-2">
      <h4>{statName}</h4>
      <div
        className="min-h-12 border border-solid p-3"
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
