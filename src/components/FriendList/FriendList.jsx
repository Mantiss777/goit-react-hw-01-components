import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  const elements = friends.map(item => (
    <li className={css.item} key={item.id}>
      <span
        className={`${css.status} ${item.isOnline ? css.online : css.ofline}`}
      ></span>
      <img
        className={css.avatar}
        src={item.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{item.name}</p>
    </li>
  ));

  return <ul className={css.friend_list}>{elements}</ul>;
}

FriendList.propTypes = {
  avatar: PropTypes.string, //??????
  name: PropTypes.string,
  isOnline: PropTypes.bool, //??????
};
