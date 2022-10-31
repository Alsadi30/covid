import React from 'react';
import { Grid } from '../styles/Grid.styled';

const ReviewCards = () => {
    return (
        <Grid>
            <div>
                <img src="/review1.png" alt="review"></img>
            </div>

            <div>
                <img src="/review2.png" alt="review"></img>
            </div>
        </Grid>
    );
};

export default ReviewCards;