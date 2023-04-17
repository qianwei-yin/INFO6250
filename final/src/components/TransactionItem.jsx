import dayjs from 'dayjs';
import categories from '../scripts/categories';

const TransactionItem = ({ transaction, setChosenTransaction }) => {
	const { id, amount, category, time, type, description, accountType, account } = transaction;

	return (
		<div className="transaction-item" onClick={() => setChosenTransaction(id)}>
			<div className="transaction-item__icon">
				{categories[category] ? categories[category] : categories['default']}
			</div>
			<div className="category-and-date">
				<span className="transaction-item__category">{category}</span>
				{/* Like Friday, Dec 27, 2022 */}
				<span className="transaction-item__date">{dayjs(time).format('ddd, MMM DD, YYYY')}</span>
			</div>
			<span className={`transaction-item__amount ${type}`}>${amount.toFixed(2)}</span>
		</div>
	);
};

export default TransactionItem;