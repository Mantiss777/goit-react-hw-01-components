import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <li className={css.item} key={id}>
            <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
