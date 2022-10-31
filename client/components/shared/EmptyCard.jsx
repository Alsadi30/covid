import React from 'react';
import styled from 'styled-components';
import { BsBag } from 'react-icons/bs'

const EmptyCardIcon = styled.div`
    background-color: #029FAE;
    border-radius: 50%;
    padding: 25px 30px;
`

const EmptyCard = () => {
    return (
        <div>
            <EmptyCardIcon>
                <BsBag size="35" color="white"></BsBag>
            </EmptyCardIcon>
        </div>
    );
};

export default EmptyCard;