import PropTypes from 'prop-types';
import css from '../Statistics.module.css';

export default function StatisticsList({ stats }) {
  const elements = stats.map(item => (
    <li className={css.item} key={item.id}>
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
