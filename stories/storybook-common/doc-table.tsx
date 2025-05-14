import styled from "styled-components";

export const DocTable = styled.table`
    width: 100%;
    position: relative;
    border-collapse: collapse;
    border-spacing: 0;
    line-height: 1.5;

    a {
        color: #1768be;
        cursor: pointer;
        text-decoration: none;
    }

    code {
        background-color: #f5f5f5;
        color: #d0021b;
        font-family: monospace;
        font-size: 0.725rem;
        font-weight: 400;
        padding: 0.25rem 0.5rem;
        white-space: pre-wrap;
    }

    td,
    th {
        font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular",
            "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue",
            Helvetica, Arial, sans-serif;
        padding: 0.5rem;
        font-size: 0.875rem;
        text-align: left;
        vertical-align: top;
    }

    thead,
    th {
        font-weight: bold;
    }

    tbody {
        tr {
            border: none;
            border-bottom: 1px solid #dde1e2;
            :nth-child(even) {
                background: #f9f9f9;
            }
        }
    }

    thead {
        tr {
            border-bottom: 2px solid #1768be;
        }

        th {
            color: #1768be;
        }
    }
`;
