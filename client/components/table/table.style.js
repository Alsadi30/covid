import styled from 'styled-components';

import {v} from './variable';

export const STable = styled.table`
    width: 100%;
    margin:20px;
    border-collapse: collapse;
    text-align: center;
    border-radius: ${v.borderRadius};
    overflow: hidden;
`;

export const STHead = styled.thead`
    position: sticky;
    z-index: 100;
`;

export const STHeadTR = styled.tr`
    background: 'rgb(245, 245, 245)';
`;

export const STH = styled.th`
    font-weight: normal;
    padding: ${v.smSpacing};
    color: 'rgb(33, 33, 33)';
    text-transform: capitalize;
    font-weight: 600;
    font-size: 14px;
    :not(:last-of-type) {
        border-right: 1px solid 'rgb(237, 237, 237)';
    }
    :first-of-type {
        width: 1%;
        white-space: nowrap;
    }
`;

export const STBody = styled.tbody``;

export const STBodyTR = styled.tr`
    background: "rgb(255, 255, 255)";
`;

export const STD = styled.td`
    padding: ${v.smSpacing};
    border: 1px solid 'rgb(237, 237, 237)';
    font-size: 14px;
`;
