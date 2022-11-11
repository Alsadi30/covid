import React from 'react';
import { Grid } from '../styles/Grid.styled';

const ReviewCards = () => {
    return (
        <>
        <h2 style={{ marginTop: '70px' }}>Our Reviews</h2>
            <Grid>
                <div>
                    <img src="/review1.png" alt="review"></img>
                </div>

                <div>
                    <img src="/review2.png" alt="review"></img>
                </div>
            </Grid>
        </>
    );
};

export default ReviewCards;