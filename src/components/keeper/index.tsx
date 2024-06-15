import Stats from "./stats";
import Sync from "./sync";
import Profile from "./profile";

const Keeper = () => {
  return (
    <div className="border-2 border-dashed p-8 uppercase">
      <div className="mb-8 flex flex-row justify-between">
        <Stats />
        <Sync />
        <Profile />
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
