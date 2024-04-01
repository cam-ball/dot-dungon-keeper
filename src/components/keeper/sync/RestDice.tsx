type RestDiceProps = {
  restDice: number;
};

const RestDice = ({ restDice }: RestDiceProps) => {
  return (
    <>
      <div className="mt-4 text-3xl">
        <hr />
      </div>
      <div className="mt-4 text-xl">
        <h4>rest dice: {restDice}</h4>
      </div>
    </>
  );
};

export default RestDice;
