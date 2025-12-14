import { Link, useLocation } from 'react-router';
import { NAVIGATION_LINKS } from '../../constants/navigation-links';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex flex-row items-center justify-start gap-4 border-b border-gray-700 p-5">
      <div className="flex gap-6">
        {NAVIGATION_LINKS.map((link) => {
          const isActive = currentPath === link.href;

          return (
            <Link
              key={link.href}
              to={link.href}
              className={`text-primary-text ${isActive ? 'text-primary underline underline-offset-4' : 'hover:text-primary'} transition-colors`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

