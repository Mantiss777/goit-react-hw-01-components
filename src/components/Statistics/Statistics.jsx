import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import StatisticsList from '../Statistics/StatisticsList/StaticsList';
import data from '../../data/data.json';

export default function Statistics({ title }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatisticsList stats={data} />
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
    })
  ),
};
