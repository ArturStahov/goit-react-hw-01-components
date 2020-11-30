import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsCard, Title, StatBlock, StatItem, StatLabel, StatQuantity } from './StyledComponents'
import generateColor from '../../service/generateRandomColor'



export default function Statistics({ title, stats }) {
  const widthStatsItem = `${stats.length > 0 && (100 / stats.length)}%`;

  return (
    <StatisticsCard>
      {title && (<Title>{title}</Title>)}

      <StatBlock>
        {stats.map(item => (
          <StatItem key={item.id} style={{ backgroundColor: generateColor() }} width={widthStatsItem} >
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