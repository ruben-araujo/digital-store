import { NavLink } from "react-router-dom";
import Logo from "./Logo";


function SimpleHeader() {
  return (
    <header className="flex items-center justify-between px-4 lg:px-20 w-full    h-[70.5px] bg-[var(--white)]">
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:w-[172.5px]">
        <NavLink to={"/"}>
          <Logo/>
        </NavLink>
      </div>
    </header>

  );
}

export default SimpleHeader;
