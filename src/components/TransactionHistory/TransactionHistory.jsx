import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ transactions,}) {
 
  const elements = transactions.map(({ id, type, amount, currency }) => (
    <tr
      key={id}
      // className={`${index % 2 === 0 ? css.even__text : css.odd__text}`}
    >
      <td className={css.text}>{type}</td>
      <td className={css.text}>{amount}</td>
      <td className={css.text}>{currency}</td>
    </tr>
  ));

  return (
    <table className={css.transaction_history}>
      <thead>
        <tr className={css.title_line}>
          <th className={css.title}>type</th>
          <th className={css.title}>amount</th>
          <th className={css.title}>currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
