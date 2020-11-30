import React from 'react';
import PropTypes from 'prop-types';
import { FriendListBlock, FriendsItem, IsActiveIndicator, FriendsAvatar, FriendsName } from './StyledComponents'
import generateColor from '../../service/generateRandomColor'

export default function FriendList({ friends }) {
  return (
    <FriendListBlock>
      {friends.map(item => (
        <FriendsItem
          key={item.id}
          style={{ backgroundColor: generateColor() }}
        >
          <IsActiveIndicator isOnl={item.isOnline}></IsActiveIndicator>
          <FriendsName>{item.name}</FriendsName>
          <FriendsAvatar src={item.avatar} alt={item.name} width="48" />
        </FriendsItem>
      ))}
    </FriendListBlock>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
