import Container from "../Container";
import Logo from "../sidebar/Logo";
import UserMenu from "./UserMenu";

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
                flex
                flex-row
                items-center
				        justify-between
                gap-3
                md:gap-0
			"
          >
            <Logo />
            <div className="md:text-3xl sx:text-2xl border-collapse">PROJECT MANAGEMENT</div>
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
