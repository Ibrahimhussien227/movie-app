import { Link, useParams } from "react-router";

import { navLinks } from "@/constants";

const Navbar = () => {
  const { category = "" } = useParams();

  return (
    <header>
      <nav>
        <Link to="/" className="text-white">
          <h1 className="text-white">Movie Search</h1>
        </Link>
        <ul>
          {navLinks.map((link: { title: string; path: string }) => {
            const isActive = category === link.path.replace("/", "");

            return (
              <li key={link.title} className="group">
                <Link
                  to={link.path}
                  className={`group transition-all ${
                    isActive
                      ? "text-red-500 font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  <span>{link.title}</span>
                  <span className="underline" />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
