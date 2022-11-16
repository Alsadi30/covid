import React from 'react';
import {Box} from './dashboardCard.style';

function DashboardCard({head, count, setField}) {
  return (
    <Box
      onClick={() => {
        setField (head);
      }}
    >
      <h2>
        {head}
      </h2>
      <p>{count}</p>
    </Box>
  );
}

export default DashboardCard;
