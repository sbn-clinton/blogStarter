import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-inherit text-slate-900 backdrop-blur-sm bg-opacity-25 font-sans">
      <div className="flex items-center justify-between p-4 md:p-6 mx-auto max-w-6xl ">
        <div className="flex items-center">
          <Link href={"/"} className=" sm:text-2xl font-bold">
            Appwrite
          </Link>
        </div>
        <div className="flex items-center font-semibold gap-4 md:gap-8 ">
          <Link
            href="/dashboard"
            className="hover:underline text-xs sm:text-sm md:text-base"
          >
            Dashboard
          </Link>
          <Link
            href="/create"
            className="hover:underline text-xs sm:text-sm md:text-base"
          >
            Create
          </Link>
          <Link
            href="/sign-in"
            className="hover:underline text-xs sm:text-sm md:text-base"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="hover:underline text-xs sm:text-sm md:text-base"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
