import { DropDownMenu } from "../dropdown/DropDownMenu";
import Link from "next/link";

export default function Header() {
  return (
    // <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
    <nav className="navigation">
      <div>
        <Link href="/">
          <span className="spot-color">S</span>
          <span className="spot-color">P</span>
          <span className="spot-color">O</span>
          <span className="spot-color">T</span>
          <span className="primary-color">L</span>
          <span className="primary-color">I</span>
          <span className="primary-color">G</span>
          <span className="primary-color">H</span>
          <span className="primary-color">T</span>
        </Link>
      </div>
      <DropDownMenu />
    </nav>
  );
}
