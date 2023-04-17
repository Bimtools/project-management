import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="w-full bg-transparent z-10">
      <div className="flex flex-row items-center justify-between py-2 px-5">
        <div className="md:text-2xl sx:text-xl border-collapse">
          PROJECT MANAGEMENT
        </div>
        <UserMenu />
      </div>
    </div>
  );
}

export default Navbar;
