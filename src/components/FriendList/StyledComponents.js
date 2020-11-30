import styled from 'styled-components';

const FriendListBlock = styled.ul`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const FriendsItem = styled.li`
  padding: 25px 20px 25px 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  transition: transform 0.4s ease;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  &:hover {
    transform: scale(1.1);
  }
  clip-path: polygon(100% 0%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
`;

const IsActiveIndicator = styled.span`
  width: 30px;
  height: 23px;
  clip-path: polygon(0 51%, 100% 100%, 100% 0);
  background-color: ${props => (props.isOnl ? 'green' : 'red')};
  margin-right: 50px;
`;
const FriendsAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 0.5rem;
`;
const FriendsName = styled.p`
  text-align: center;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
`;

export { FriendListBlock, FriendsItem, IsActiveIndicator, FriendsAvatar, FriendsName }