import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import s from './BlockNavigation.module.css';

const BlockNavigation = ({ navConfig }) => {
  return (
    <ul className={s.nav}>
      {navConfig.map(({ imgUrl, name, alt, to }, index) => (
        <li key={index}>
          <MenuItem imgUrl={imgUrl} name={name} alt={alt} to={to} />
        </li>
      ))}
    </ul>
  );
};

BlockNavigation.propTypes = {
  navConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      name: PropTypes.string,
      to: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};

export default BlockNavigation;
