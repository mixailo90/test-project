import type { LinkProps } from 'react-router-dom';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavLink.scss';
function NavLink({ children, to, ...props }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link className={match ? 'navLink active' : 'navLink'} to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}
export default NavLink;
