import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import {Container} from '../../styles/Container.styled';

function LoadingSkeleton () {
  let times = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  times.length = 20;

  return (
    <SkeletonTheme>
      <Container>
        <Skeleton count={1} height={100} inline={true} />
        <span
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            margin: '15px',
          }}
        >
          {times.map (i => (
            <Skeleton
              count={1}
              height={210}
              width={210}
              style={{margin: '13px'}}
            />
          ))}
        </span>
      </Container>
    </SkeletonTheme>
  );
}

export default LoadingSkeleton;
