import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList ({friends}) {
    return (
     <ul className={styles.friendList}>
        {friends.map(friend => (
           <li key = {friend.id} className={styles.idList}>
             <span className={friend.isOnline ? styles.online : styles.offline}>
             </span>
             <img className = {styles.avatar} src={friend.avatar} alt = {friend.name} style={{width:'48px'}} />
             <p className={styles.friendName}>{friend.name}</p>
           </li>
        ))}  
     </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default FriendList;