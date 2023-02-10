import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        {/* Automatically Lazy Load */}
        <Image src="/logo.png" width={128} height={77} />
        <br></br>
      </div>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/ninjas"}>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
