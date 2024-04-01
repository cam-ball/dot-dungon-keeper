import Stats from "./stats";

const Keeper = () => {
  return (
    <div className="border-2 border-dashed p-8">
      <div className="mb-8 flex flex-row justify-between">
        <Stats />
        <div className="basis-1/3">sync</div>
        <div className="basis-1/3">name and pfp</div>
      </div>
      <div className="mb-8 flex flex-row justify-between">
        <div>skills</div>
        <div>backpack</div>
      </div>
      <div className="mb-8 flex flex-row justify-between">
        <div>aspect</div>
        <div>roles</div>
        <div>pet and transport and spells</div>
      </div>
    </div>
  );
};

export default Keeper;
