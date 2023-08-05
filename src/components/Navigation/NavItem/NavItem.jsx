import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import s from './NavItem.module.css';

const NavItem = ({ name, path }) => {
  const isActive = false;

  const navItemStyles = [s.NavItem];
  isActive && navItemStyles.push(s.NavItemActive);

  return (
    <NavLink
      to={path}
      className={navItemStyles.join(' ')}
      activeClassName={s.NavItemActive}
    >
      <div className={s.itemName}>{name}</div>
    </NavLink>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default NavItem;
