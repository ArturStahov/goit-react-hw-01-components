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
export { UserCard, Description, Avatar, Title, DescText, StatBlock, StatItem, StatLabel, StatQuantity }