import React from 'react';
import PropTypes from 'prop-types';
import { UserCard, Description, Avatar, Title, DescText, StatBlock, StatItem, StatLabel, StatQuantity } from './StyledComponents'





export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <UserCard>
      <Description>
        <Avatar src={avatar} alt="user avatar" />
        <Title>{name}</Title>
        <DescText>&#64; {tag}</DescText>
        <DescText>{location}</DescText>
      </Description>

      <StatBlock>
        <StatItem>
          <StatLabel>Followers</StatLabel>
          <StatQuantity>{followers}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Views</StatLabel>
          <StatQuantity>{views}</StatQuantity>
        </StatItem>
        <StatItem>
          <StatLabel>Likes</StatLabel>
          <StatQuantity>{likes}</StatQuantity>
        </StatItem>
      </StatBlock>
    </UserCard>
  );
}

Profile.defaultProps = {
  avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
