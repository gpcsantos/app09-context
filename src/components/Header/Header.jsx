import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Header({
  title = "My Site",
  navigationLinks = [{ title: "navExemple", path: "/example" }],
  socialMediaButtons = "socialMediaButtons",
  loading = false,
}) {
  return (
    <header className="flex justify-between items-center p-5 border-b border-slate-300 dark:border-slate-700">
      <h2 className="text-xl font-bold tracking-tight">
        <Link to="/">{title} </Link>
      </h2>
      <nav>
        {loading && (
          <ClipLoader
            color="#36d7b7"
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
          />
        )}
        {!loading && (
          <ul className="flex space-x-4">
            {navigationLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link to={link.path} className="hover:text-gray-300">
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
      <div>{socialMediaButtons}</div>
    </header>
  );
}
