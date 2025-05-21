import { Link } from "@tanstack/react-router";

import ClerkHeader from "../integrations/clerk/header-user.tsx";

export default function Header() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/clerk">Clerk</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/tanstack-query">My Job Applications</Link>
        </div>
      </nav>

      <div>
        <ClerkHeader />
      </div>
    </header>
  );
}
