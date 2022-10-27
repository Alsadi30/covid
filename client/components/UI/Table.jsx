import React from "react";
import styled from "styled-components";

const tableStyles = styled.div`
  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    th {
      background: green;
      border-bottom: 3px solid blue;
      color: white;
      fontweight: bold;
    }
  }
`;
