import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const UserCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #fff;
  border: 2px solid grey;
  border-radius: 0.5rem;
  box-shadow: 10px 5px 5px grey;
  margin-bottom: 50px;
`;

const Description = styled.div`
  padding: 50px 0px 50px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align:center;
`;

const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Title = styled.p`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 20px;
`;

const DescText = styled.p`
width: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  color: #000000;
  &:not(:last-child){
      margin-bottom: 10px;;
  }
`;

const StatBlock = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color:goldenrod;
`;

const StatItem = styled.li`
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 33.33%;
  text-align:center;
  transition-property:background;
  transition-duration:0.3s;
  &:hover{
      background-color:yellowgreen;
  }
  &:not(:last-child){
     border-right: 2px solid grey;
  }
  
`;

const StatLabel = styled.span`
  width: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 10px;
`;

const StatQuantity = styled.span`
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
`;



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
