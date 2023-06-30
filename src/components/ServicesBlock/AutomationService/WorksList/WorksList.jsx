import PropTypes from 'prop-types';
import SendInfo from 'common/SendInfo';
import dot from '../../../../images/serv-auto-dotlist.svg';
import s from './WorksList.module.css';

const WorksList = ({ worksConfig }) => {
  return (
    <div className={s.blockWrapper}>
      <h2 className={s.title}>
        Выполняем следующие виды работ по автоматизации:
      </h2>
      <ul className={s.list}>
        {worksConfig.map(({ text }, index) => (
          <li key={index} className={s.item}>
            <img src={dot} alt="dot"></img>
            <div className={s.text}>{text}</div>
          </li>
        ))}
      </ul>

      <SendInfo
        linkName="Техническое обслуживание"
        linkPath="/"
        hideLink={false}
      />
    </div>
  );
};

WorksList.propTypes = {
  worksConfig: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      head: PropTypes.string,
      text: PropTypes.string,
      alt: PropTypes.string,
    }),
  ).isRequired,
};
export default WorksList;
