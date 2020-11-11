import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsCard = styled.section`
  padding-top:25px;
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

const Title = styled.h2`
  text-align:center;
  width: 100%;
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 20px;
`;
const StatBlock = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const StatItem = styled.li`
  width:${props => props.width};
  padding-top: 25px;
  padding-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align:center;
  transition-property:background;
  transition-duration:0.3s;
 
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

const generateRandomColor = () => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomColor = [0, 0, 0].map(elem => {
    elem = getRandomIntInclusive(0, 255);
    return elem;
  });

  return `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
}

export default function Statistics({ title, stats }) {
  const widthStatsItem = `${stats.length > 0 && (100 / stats.length)}%`;

  return (
    <StatisticsCard>
      {title && (<Title>{title}</Title>)}

      <StatBlock>
        {stats.map(item => (
          <StatItem key={item.id} style={{ backgroundColor: generateRandomColor() }} width={widthStatsItem} >
            <StatLabel>{item.label}</StatLabel>
            <StatQuantity>{item.percentage} &#37;</StatQuantity>
          </StatItem>
        ))}
      </StatBlock>
    </StatisticsCard>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
}