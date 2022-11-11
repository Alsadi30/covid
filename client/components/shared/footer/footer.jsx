import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container.styled';
import { GridFraction, GridLayout } from '../../styles/Grid.styled';

const Box = styled.div`
    background-color: #F0F2F3;
    padding: 100px 0 80px 0;

    p {
        margin: 0 !important;
    }
`
const Footer = () => {
    return (
        <Box>
            <Container>
                <GridFraction>
                    <div>
                        <h3>Company</h3>
                        {
                            ["About Us", "Contact Us", "Career"].map(item => <ul>
                                <li>{item}</li>
                            </ul>)
                        }
                    </div>

                    <div>
                    <h3>My Account</h3>
                        {
                            ["Dashboard", "My Profile", "My Orders"].map(item => <ul>
                                <li>{item}</li>
                            </ul>)
                        }
                    </div>

                    <div>
                    <h2 style={{ color: 'rgb(2, 159, 174)' }}>Covid 19 Shop</h2>
                        {
                            ["Dhaka, Bangladesh", "+88016454523", "covid@gmaol.com"].map(item => <ul>
                                <li>{item}</li>
                            </ul>)
                        }
                    </div>
                </GridFraction>
            </Container>
        </Box>
    );
};

export default Footer;