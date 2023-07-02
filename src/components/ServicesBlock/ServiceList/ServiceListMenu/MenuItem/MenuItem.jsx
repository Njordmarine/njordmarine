import PropTypes from 'prop-types';
import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './MenuItem.module.css';

const MenuItem = ({ imgUrl, name, alt, to }) => {
  const match = useRouteMatch();
  const isActive = false;

  const navItemStyles = [s.NavItem];
  isActive && navItemStyles.push(s.NavItemActive);

  return (
    <NavLink
      to={`${match.url}/${to}`}
      className={navItemStyles.join(' ')}
      activeClassName={s.NavItemActive}
      exact
    >
      <img className={s.img} src={imgUrl} alt={alt} />
      <span className={s.itemName}>{name}</span>
    </NavLink>
  );
};

MenuItem.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuItem;
// const MenuItem = ({ name, path }) => {
//   const isActive = false;

//   const navItemStyles = [s.NavItem];
//   isActive && navItemStyles.push(s.NavItemActive);

//   return (
//     <NavLink
//       to={path}
//       className={navItemStyles.join(' ')}
//       activeClassName={s.NavItemActive}
//       exact
//     >
//       <span className={s.itemName}>{name}</span>
//     </NavLink>
//   );
// };

// MenuItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   path: PropTypes.string.isRequired,
// };

// export default MenuItem;
