import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

const alertStyles = {
  backgroundColor: `${getRandomHexColor()}`,
};

export default function StatisticsList({ stats }) {
  const elements = stats.map(item => (
    <li style={alertStyles} className={css.item} key={item.id}>
      <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}</span>
    </li>
  ));

  return <ul className={css.stat_list}>{elements}</ul>;
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
