import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const alertStyles = {
  backgroundColor: `${getRandomHexColor()}`,
};

export default function Statistics({ stats, title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li style={alertStyles} className={css.item} key={id}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
