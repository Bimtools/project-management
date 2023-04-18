import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="flex flex-row items-center py-2 px-5 border-[1px] shadow-md">
      <div className="grow justify-center md:text-3xl sx:text-xl">
        <div className="flex items-center justify-center">
          <div>PROJECT MANAGEMENT</div>
        </div>
      </div>
      <div className="flex-none items-center">
        <UserMenu />
      </div>
    </div>
  );
}

export default Navbar;
