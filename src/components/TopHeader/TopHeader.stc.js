import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

export const TopHeaderStc = styled(Navbar)`
    position: relative;
    height: 53px;
    border-bottom: solid 1px #e0e4e9;
    font-size: 15px;
    color: #8a8f95;
    text-align: center;
    line-height: 52px;
    cursor: pointer;
    z-index: 1;
    -webkit-transition: background-color .3s;
    transition: background-color .3s;
    font-weight: 500;
`;
